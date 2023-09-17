import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";
const SvgShare = props => <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="" viewBox="0 0 24 24" {...props}><Path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" /></Svg>;
const Memo = memo(SvgShare);
export default Memo;