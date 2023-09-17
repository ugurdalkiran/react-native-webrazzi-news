import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";
const SvgArrowLeft = props => <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="" viewBox="0 0 24 24" {...props}><Path d="M19 12H5M12 19l-7-7 7-7" /></Svg>;
const Memo = memo(SvgArrowLeft);
export default Memo;