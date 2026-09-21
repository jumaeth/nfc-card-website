import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EditorIntro } from "@/components/editor/EditorIntro";
import { CardEditor } from "@/components/editor/CardEditor";
import { slugToLocale } from "@/lib/locale";
import { buildMetadata, seoCopy } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const loc = slugToLocale((await params).locale) ?? "DE";
  return buildMetadata({
    locale: loc,
    path: "/editor",
    title: seoCopy.editor.title[loc],
    description: seoCopy.editor.description[loc],
  });
}

export default function EditorPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-28 sm:pt-32">
        <EditorIntro />
        <div className="pb-24 sm:pb-32">
          <CardEditor />
        </div>
      </main>
      <Footer />
    </>
  );
}
