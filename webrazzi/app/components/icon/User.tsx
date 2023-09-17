import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { memo } from "react";
const SvgUser = props => <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="" viewBox="0 0 24 24" {...props}><Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><Circle cx={12} cy={7} r={4} /></Svg>;
const Memo = memo(SvgUser);
export default Memo;