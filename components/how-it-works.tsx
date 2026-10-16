import { DispatchDiagram } from "@/components/dispatch-diagram";
import { Reveal } from "@/components/reveal";
import { howItWorks } from "@/lib/content";

/** Four steps, and the drawing that says what the desk actually does. */
export function HowItWorks() {
  return (
    <section className="wrap py-24 md:py-32" id="how-it-works">
      <Reveal className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-6">
        <h2 className="col-span-12 text-head md:col-span-5">
          {howItWorks.heading}
        </h2>
        <p className="col-span-12 text-body text-muted md:col-span-4 md:col-start-9">
          {howItWorks.paragraph}
        </p>
      </Reveal>

      <Reveal className="mt-14 md:mt-20" index={1}>
        <DispatchDiagram alt={howItWorks.diagramAlt} />
      </Reveal>

      <ol className="mt-12 grid grid-cols-1 gap-x-[var(--gutter)] gap-y-10 md:mt-16 md:grid-cols-4">
        {howItWorks.steps.map((step, index) => (
          <Reveal as="li" index={index + 2} key={step.title}>
            <h3 className="text-lead">{step.title}</h3>
            <p className="mt-2 text-body text-muted">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
