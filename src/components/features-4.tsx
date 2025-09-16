import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Services I Provide
          </h2>
          <p>
            Lyra is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-3 col-span-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">SaaS Development</h3>
            </div>
            <p className="text-sm">
              Specialized in building scalable software-as-a-service platforms
              with modern React architectures, from MVP to enterprise-level
              applications.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium"> Mobile Applications</h3>
            </div>
            <p className="text-sm">
              Cross-platform mobile app development using React Native and Expo,
              delivering native performance with web development efficiency.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />

              <h3 className="text-sm font-medium"> Frontend Development</h3>
            </div>
            <p className="text-sm">
              Complete frontend solutions including responsive web applications,
              dashboard interfaces, and interactive user experiences.
            </p>
          </div>
          <div className="space-y-2 col-span-3">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />

              <h3 className="text-sm font-medium">Technical Consulting</h3>
            </div>
            <p className="text-sm">
              Code reviews, architecture planning, and technical guidance for
              development teams looking to modernize their frontend stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
