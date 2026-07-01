interface PageIntroProps {
  title: string;
  description: string;
}

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{title}</h1>
      <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p>
    </section>
  );
}
