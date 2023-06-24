/**
this function is used to determine the color of the text in the button
based on the background color of the button
if the background color is light, the text color will be black
if the background color is dark, the text color will be white
*/
const getTextColor = (bgcolor) => {
  if (!bgcolor) return "white";
  const rgb = bgcolor
    .substring(4, bgcolor.length - 1)
    .replace(/ /g, "")
    .split(",");
  const r = parseInt(rgb[0], 10);
  const g = parseInt(rgb[1], 10);
  const b = parseInt(rgb[2], 10);
  const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);
  return brightness > 125 ? "black" : "white";
};
/**
 * This is a temporary button component
 * It is used to create buttons with different colors
 * Either colorClass or color must be provided
 * @param {{colorClass:String, color: String,children: any}} colorClass "bootstarp color class name such as btn-primary, btn-danger, btn-success"
 * @param children "the text inside the button"
 * @param color "the color of the button in rgb format"
 * @returns {JSX.Element}
 */
export const TempButton = ({ colorClass, children, color }) => {
  return (
    <div
      className={`btn ${colorClass} p-2 px-4 m-3 shadow`}
      // style={color ? { backgroundColor: color } : {}}
      style={
        color ? { backgroundColor: color, color: getTextColor(color) } : {}
      }
      // style upon hover opacity becomes 0.8
      onMouseEnter={(e) => {
        e.target.style.opacity = 0.7;
        e.target.style.outline = "3px solid rgb(0, 0, 0)";
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = 1;
        e.target.style.outline = "none";
      }}
    >
      {" "}
      {children}
    </div>
  );
};

/**
 * A simple blue button component, does not take any props other than children
 * @param {any} props.children "the text inside the button use it like \<BlueButton>text\</BlueButton>"
 * @returns {JSX.Element}
 * @example <BlueButton>text</BlueButton>
 */
export const BlueButton = (props) => {
  return <TempButton colorClass="btn-primary">{props.children}</TempButton>;
};

/**
 * A simple red button component, does not take any props other than children
 * @param {any} props.children "the text inside the button use it like \<RedButton>text\</RedButton>"
 * @returns {JSX.Element}
 * @example <RedButton>text</RedButton>
 */
export const RedButton = (props) => {
  return <TempButton colorClass="btn-danger">{props.children}</TempButton>;
};

/**
 * A simple green button component, does not take any props other than children
 * @param {any} props.children "the text inside the button use it like \<GreenButton>text\</GreenButton>"
 * @returns {JSX.Element}
 * @example <GreenButton>text</GreenButton>
 */
export const GreenButton = (props) => {
  return <TempButton colorClass="btn-success">{props.children}</TempButton>;
};

/**
 * A simple white button component, does not take any props other than children
 * @param {any} props.children "the text inside the button use it like \<WhiteButton>text\</WhiteButton>"
 * @returns {JSX.Element}
 * @example <WhiteButton>text</WhiteButton>
 */
export const RedOutlineButton = (props) => {
  return (
    <TempButton colorClass="btn-outline-danger">{props.children}</TempButton>
  );
};

/**
 * A simple white button component, does not take any props other than children
 * @param {any} props.children "the text inside the button use it like \<WhiteButton>text\</WhiteButton>"
 * @returns {JSX.Element}
 * @example <WhiteButton>text</WhiteButton>
 */
export const WhiteOutlineButton = (props) => {
  return (
    <TempButton colorClass="btn-outline-light">{props.children}</TempButton>
  );
}