"use client";

import Giscus from "@giscus/react";
import { MessageSquare } from "lucide-react";
import { giscusConfig, isGiscusConfigured } from "@/lib/giscus-config";
import SectionHeader from "@/components/SectionHeader";

export default function GiscusComments() {
  return (
    <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-0">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          icon={MessageSquare}
          iconClassName="bg-slate-100 text-slate-600"
          title="Still Stuck? Share Your WeChat Nightmare"
          subtitle="Verification blocked? Pay setup failed? Lost your chats? Drop it below — your story might save the next traveler."
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-section-muted p-4 shadow-sm sm:p-6">
          {isGiscusConfigured() ? (
            <Giscus
              id="comments"
              repo={giscusConfig.repo as `${string}/${string}`}
              repoId={giscusConfig.repoId}
              category={giscusConfig.category}
              categoryId={giscusConfig.categoryId}
              mapping="pathname"
              strict="0"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="bottom"
              theme="preferred_color_scheme"
              lang="zh-CN"
              loading="lazy"
            />
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-muted">
              <p className="font-semibold text-slate-text">
                Comments not configured yet
              </p>
              <p className="mt-2">
                Set up Giscus at{" "}
                <a
                  href="https://giscus.app"
                  className="text-china-red underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  giscus.app
                </a>
                , then add your{" "}
                <code className="rounded bg-gray-100 px-1">repoId</code> and{" "}
                <code className="rounded bg-gray-100 px-1">categoryId</code> in{" "}
                <code className="rounded bg-gray-100 px-1">
                  src/lib/giscus-config.ts
                </code>{" "}
                or <code className="rounded bg-gray-100 px-1">.env.local</code>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
