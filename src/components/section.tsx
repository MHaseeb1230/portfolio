import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  containerClassName?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  actions,
  containerClassName = "",
  className = "",
  children,
  ...props
}: SectionProps) {
  const hasHeader = eyebrow || title || description || actions;

  return (
    <section id={id} className={`section ${className}`} {...props}>
      <div className={`container-px ${containerClassName}`}>
        {hasHeader ? (
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
              {title ? <h2 className="section-title">{title}</h2> : null}
              {description ? <p className="section-description">{description}</p> : null}
            </div>
            {actions ? <div className="flex items-center gap-3 md:self-end">{actions}</div> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
