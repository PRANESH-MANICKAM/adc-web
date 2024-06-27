// scss declaration
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
// jpg declaration
declare module "*.jpg";
// png declaration
declare module "*.png";
