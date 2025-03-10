/**
 * A utility component for rendering an IconType component
 * with props.
 *
 * @example
 * import { FaSmile } from "react-icons/fa";
 * <IconItem icon={FaSmile} className="text-3xl" />
 *
 * @param {IconType} icon - The IconType component to render.
 * @param {React.ComponentProps<IconType>} props - The props to pass to the
 * rendered icon component.
 * @returns {React.ReactElement} The rendered icon component.
 */
export const IconItem = ({
  icon: Icon,
  props,
}: {
  icon: React.ComponentType;
  props?: React.ComponentProps<typeof Icon>;
}) => {
  return <Icon {...props} />;
};
