import { SectionTitle } from "@/features/base";
import { useTheme } from "@/lib/providers";
import MDEditor from "@uiw/react-md-editor";

export default function EventMarkdown({ markdown }: { markdown: string }) {
  const { theme } = useTheme();
  return (
    <div className="space-y-4" data-color-mode={theme}>
      <SectionTitle title="Information" />
      <MDEditor.Markdown source={markdown} />
    </div>
  );
}
