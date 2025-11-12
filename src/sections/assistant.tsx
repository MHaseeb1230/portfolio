"use client";

import * as React from "react";
import { Section } from "@/components/section";
import Vapi from "@vapi-ai/web";

const ASSISTANT_ID = "d8df5a5a-ac86-4796-84be-f3116445616c";
const FALLBACK_PUBLIC_KEY = "69a30ffb-adb0-4488-9332-177367a95c2d";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY ?? FALLBACK_PUBLIC_KEY;

type CallStatus = "idle" | "initialising" | "connecting" | "in-call" | "ending";

export function Assistant() {
  const vapiRef = React.useRef<Vapi | null>(null);
  const [status, setStatus] = React.useState<CallStatus>("idle");
  const [loadError, setLoadError] = React.useState<string | null>(null);
  const [volumeLevel, setVolumeLevel] = React.useState(0);

  React.useEffect(() => {
    setStatus("initialising");
    const vapi = new Vapi(PUBLIC_KEY);
    vapiRef.current = vapi;
    setLoadError(null);
    setStatus("idle");

    const handleCallStart = () => {
      setStatus("in-call");
      setLoadError(null);
    };
    const handleCallEnd = () => {
      setStatus("idle");
      setVolumeLevel(0);
    };
    const handleCallFailed = (event: { error?: string }) => {
      const message =
        event?.error ?? "Assistant session could not start. Please check your microphone and try again.";
      setLoadError(message);
      setStatus("idle");
      setVolumeLevel(0);
    };
    const handleError = (error: unknown) => {
      console.error("Vapi assistant error", error);
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Assistant encountered an issue. Refresh or try again shortly.";
      setLoadError(message);
      setStatus("idle");
      setVolumeLevel(0);
    };
    const handleVolume = (volume: number) => setVolumeLevel(volume);

    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("call-start-failed", handleCallFailed);
    vapi.on("error", handleError);
    vapi.on("volume-level", handleVolume);

    return () => {
      vapi.removeAllListeners();
      vapi
        .stop()
        .catch(() => {
          /* ignore */
        });
      vapiRef.current = null;
    };
  }, []);

  const handleStart = async () => {
    if (!vapiRef.current) {
      setLoadError("Assistant is still initialising. Please try again in a moment.");
      return;
    }

    setStatus("connecting");
    setLoadError(null);
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Microphone access is not supported in this browser.");
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());

      await vapiRef.current.start(ASSISTANT_ID);
    } catch (error) {
      console.error("Failed to start assistant", error);
      let message = "Unable to start the assistant.";
      if (error instanceof DOMException) {
        if (error.name === "NotAllowedError") {
          message = "Microphone permissions are required. Please allow access and try again.";
        } else if (error.name === "NotFoundError") {
          message = "No microphone was detected. Connect one and retry.";
        } else if (error.name === "NotReadableError") {
          message = "Your microphone is already in use by another application.";
        } else {
          message = error.message;
        }
      } else if (error instanceof Error && error.message) {
        message = error.message;
      }
      setLoadError(message);
      setStatus("idle");
    }
  };

  const handleStop = async () => {
    if (!vapiRef.current) return;
    setStatus("ending");
    try {
      await vapiRef.current.stop();
    } catch (error) {
      console.error("Failed to stop assistant", error);
    } finally {
      setStatus("idle");
      setVolumeLevel(0);
    }
  };

  const disabled = status === "connecting" || status === "in-call" || status === "ending";

  return (
    <Section
      id="assistant"
      eyebrow="Interactive Demo"
      title="Chat with my portfolio assistant."
      description="Start a live voice conversation with the agent I use during projects. It can answer questions about my background, projects, and delivery approach."
      containerClassName="max-w-5xl"
    >
      <div className="surface-panel border border-border/60 rounded-[32px] p-6 shadow-[0_18px_48px_rgba(14,17,38,0.22)]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold tracking-tight">Live Voice Assistant</h3>
            <span className="tag-chip">Realtime demo</span>
          </div>

          <div className="grid gap-5 md:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="flex flex-col gap-4">
              <p className="subtle text-sm leading-relaxed">
                Click start, allow microphone access, and ask about my experience, project pipeline, or how I partner with teams.
                You can end the session anytime; no audio leaves your device without permission.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleStart}
                  disabled={disabled || status === "initialising" || !!loadError}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white shadow-[0_18px_40px_rgba(124,58,237,0.35)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "connecting"
                    ? "Connecting…"
                    : status === "in-call"
                      ? "In progress"
                      : "Start conversation"}
                </button>
                <button
                  type="button"
                  onClick={handleStop}
                  disabled={status !== "in-call" && status !== "ending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 px-5 py-2 text-sm font-medium text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "ending" ? "Ending…" : "End chat"}
                </button>
              </div>
              <div className="space-y-2 text-xs text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                <p>
                  Status:{" "}
                  <span className="font-medium text-[color:color-mix(in_srgb,var(--foreground)_75%,var(--accent)_25%)]">
                    {status === "idle" && "Ready"}
                    {status === "initialising" && "Initialising…"}
                    {status === "connecting" && "Connecting…"}
                    {status === "in-call" && "Live"}
                    {status === "ending" && "Ending…"}
                  </span>
                </p>
                <p>Mic level: {status === "in-call" ? `${Math.round(volumeLevel * 100)}%` : "—"}</p>
              </div>
              {loadError ? (
                <p className="rounded-2xl border border-border/60 bg-[color:color-mix(in_srgb,var(--card)_85%,transparent)] p-3 text-xs text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                  {loadError}
                </p>
              ) : null}
            </div>

            <div className="relative flex items-center justify-center rounded-3xl border border-border/60 bg-[color:color-mix(in_srgb,var(--card)_92%,transparent)] p-6">
              <div className="relative grid place-items-center rounded-full border border-border/60 p-10">
                <div className="absolute inset-0 rounded-full border border-border/60 opacity-30" />
                <div className="absolute inset-3 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_30%,transparent)] opacity-60 blur-2xl" />
                <div className="relative grid place-items-center rounded-full bg-[color:color-mix(in_srgb,var(--accent)_10%,var(--card)_90%)] p-8">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm6-3a6 6 0 0 1-12 0h-2a8 8 0 0 0 7 7.93V22h2v-2.07A8 8 0 0 0 20 12h-2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {status === "in-call" ? (
                  <span className="absolute -bottom-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                    Live
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

