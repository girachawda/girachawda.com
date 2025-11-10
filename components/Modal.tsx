"use client";

import { useEffect, useRef } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // ESC to close + lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [open, onClose]);

  // Auto-focus first focusable element
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const el = panelRef.current.querySelector<HTMLElement>(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    el?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-2xl rounded-2xl bg-background shadow-xl ring-1 ring-border"
        role="document"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
        >
          ✕
        </button>
        <div className="max-h-[80vh] overflow-y-auto p-6">
          {title && <h3 className="mb-3 text-xl font-semibold">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}
