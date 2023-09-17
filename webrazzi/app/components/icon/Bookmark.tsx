import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";
const SvgBookmark = props => <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="" viewBox="0 0 24 24" {...props}><Path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></Svg>;
const Memo = memo(SvgBookmark);
export default Memo;