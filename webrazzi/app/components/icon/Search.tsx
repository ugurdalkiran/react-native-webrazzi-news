import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { memo } from "react";
const SvgSearch = props => <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="" viewBox="0 0 24 24" {...props}><Circle cx={11} cy={11} r={8} /><Path d="m21 21-4.35-4.35" /></Svg>;
const Memo = memo(SvgSearch);
export default Memo;