import React from 'react';

const OutlookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      fill="currentColor" 
      {...props}
    >
        <path d="M14.2,4.22,23,7.86V19.49a1.72,1.72,0,0,1-.83,1.46l-8.2,4.86a1.7,1.7,0,0,1-1.66,0l-8.2-4.86A1.72,1.72,0,0,1,3.29,19.49V7.86L12,4.22a1.7,1.7,0,0,1,2.24,0ZM8.11,12.7,4,14.86v-5.5Z" />
    </svg>
);

export default OutlookIcon;