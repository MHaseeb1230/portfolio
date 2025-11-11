"use client";

import * as React from "react";
import { Section } from "@/components/section";

declare global {
  interface Window {
    VapiAI?: {
      create: (options: {
        element: HTMLElement;
        assistantId: string;
        shareKey?: string;
        theme?: Record<string, unknown>;
        layout?: "widget" | "embedded";
        showLauncher?: boolean;
      }) => { destroy?: () => void };
    };
  }
}

const VAPI_SCRIPT_SRC = "https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/index.umd.js";
const ASSISTANT_ID = "d8df5a5a-ac86-4796-84be-f3116445616c";
const SHARE_KEY = "69a30ffb-adb0-4488-9332-177367a95c2d";

export function Assistant() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [loadError, setLoadError] = React.useState<string | null>(null);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    let cleanup: (() => void) | undefined;

    const initialiseAssistant = () => {
      if (!window.VapiAI || !containerRef.current) {
        setLoadError("Assistant SDK not available.");
        setIsReady(false);
        return;
      }
      setLoadError(null);
      setIsReady(true);
      const instance = window.VapiAI.create({
        element: containerRef.current,
        assistantId: ASSISTANT_ID,
        shareKey: SHARE_KEY,
        layout: "embedded",
        showLauncher: false,
        theme: {
          accentColor: "#7c3aed",
          backgroundColor: "transparent",
          textColor: "var(--foreground)",
        },
      });

      cleanup = () => {
        instance?.destroy?.();
      };
    };

    if (window.VapiAI) {
      initialiseAssistant();
    } else {
      const script = document.createElement("script");
      script.src = VAPI_SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        setTimeout(initialiseAssistant, 500);
      };
      script.onerror = () => {
        setIsReady(false);
        setLoadError("Failed to load Vapi SDK. Please try again later.");
      };
      document.head.appendChild(script);
      cleanup = () => {
        document.head.removeChild(script);
      };
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <Section
      id="assistant"
      eyebrow="Interactive Demo"
      title="Chat with my portfolio assistant."
      description="Preview the conversational agent I’ve been building. Feel free to ask about my background, projects, or how I approach frontend engineering. It’s the same assistant I use during client engagements for instant project context."
      containerClassName="max-w-5xl"
    >
      <div className="surface-panel border border-border/60 rounded-[32px] p-6 shadow-[0_18px_48px_rgba(14,17,38,0.22)]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold tracking-tight">Live Voice & Chat Assistant</h3>
            <span className="tag-chip">Realtime demo</span>
          </div>
          <div className="relative min-h-[480px] w-full overflow-hidden rounded-3xl border border-border/60 bg-[color:color-mix(in_srgb,var(--card)_92%,transparent)]">
            <div ref={containerRef} className="h-full w-full" />
            {!isReady && !loadError ? (
              <div className="absolute inset-0 grid place-items-center bg-[color:color-mix(in_srgb,var(--card)_70%,transparent)]">
                <p className="subtle text-sm">Loading assistant…</p>
              </div>
            ) : null}
            {loadError ? (
              <div className="absolute inset-0 grid place-items-center bg-[color:color-mix(in_srgb,var(--card)_70%,transparent)] p-6 text-center">
                <p className="subtle text-sm">
                  {loadError} If you continue to see this message, please open the assistant directly at{" "}
                  <a
                    href="https://vapi.ai?demo=true&shareKey=69a30ffb-adb0-4488-9332-177367a95c2d&assistantId=d8df5a5a-ac86-4796-84be-f3116445616c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] underline"
                  >
                    vapi.ai
                  </a>
                  .
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}

