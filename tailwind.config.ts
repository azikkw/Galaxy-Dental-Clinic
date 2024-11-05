import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/card/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		screens: {
			'sm-custom': '425px'
		},
  		colors: {
  			mainTextColor: '#27313F',
  			secondTextColor: '#4D5662',
  			mainBlueColor: '#0D9DDF',
			hoverBlueColor: "#018ccc",
  			secondBlueColor: '#E7F6FE',
  			thirdBlueColor: '#5F84B0',
			fourthBlueColor: '#F1F8FF',
			greenColor: '#4BBC5C',
			hoverGreenColor: '#35b349',
			carouselNextButtonColor: '#004080',
			carouselNextButtonHover: '#013467',
			carouselPrevButtonHover: '#3b424c',
  			redColor: '#F64242',
  			beigeColor: '#FCD6A3',
  			mainBorderColor: '#E1E5EB',
			hoverBorderColor: '#c7cacf',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
