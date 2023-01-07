import * as React from 'react';
function SvgCross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" {...props}>
      <path d="M456.851 0L245 212.564 33.149 0 .708 32.337l211.961 212.667L.708 457.678 33.149 490 245 277.443 456.851 490l32.441-32.322-211.961-212.674L489.292 32.337z" />
    </svg>
  );
}
export default SvgCross;
