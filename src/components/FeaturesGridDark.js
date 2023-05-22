import clsx from "clsx";

import { Container } from "@/components/Container";

const features = [
  {
    name: "Transparency and Trust",
    description:
      "Integrity is at the heart of our values. We believe in transparency, honesty, and fairness. Our traders and investors trust us to provide them with a platform that they can rely on, and we make it our mission to keep that trust and confidence.",
    className:
      "sm:after:content-[''] sm:after:right-0 sm:after:h-5/6 sm:after:w-px sm:after:absolute sm:after:bg-gray-secondary-400/80",
    icon: function AmbitionIcon() {
      return (
        <svg
          className="h-14 w-14 sm:h-16 sm:w-16"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M29.6651 8.00113C24.7346 6.90898 19.5847 7.41028 14.9574 9.43281C10.3301 11.4553 6.46424 14.8947 3.91681 19.2553C3.79799 19.4588 3.74988 19.6958 3.77998 19.9295C3.81008 20.1632 3.9167 20.3803 4.08319 20.547L11.0159 27.4802C15.9297 19.8544 22.2605 13.2419 29.6651 8.00113V8.00113Z"
            fill="#9EADB2"
          />
          <path
            d="M55.9988 34.3367C57.0909 39.2674 56.5897 44.4176 54.5673 49.0453C52.5449 53.6729 49.1057 57.539 44.7454 60.0866C44.5419 60.2054 44.3049 60.2535 44.0712 60.2234C43.8376 60.1933 43.6204 60.0867 43.4538 59.9202L36.521 52.987C44.1463 48.0729 50.7584 41.7417 55.9988 34.3367V34.3367Z"
            fill="#9EADB2"
          />
          <path
            d="M14.8824 49.1202C13.4809 47.7221 11.5823 46.937 9.60279 46.937C7.62332 46.937 5.72465 47.7221 4.32323 49.1202C0.885653 52.5569 0.0409227 62.4277 0.00359247 62.8458C-0.00852297 62.9931 0.0100834 63.1412 0.0582322 63.2809C0.106381 63.4206 0.183022 63.5487 0.283297 63.6572C0.383572 63.7657 0.505294 63.8522 0.640748 63.9112C0.776201 63.9702 0.922432 64.0004 1.07017 63.9999C1.09897 63.9999 1.12883 63.9999 1.15763 63.9999C1.57573 63.9658 11.4458 63.121 14.8824 59.6832C16.2813 58.2816 17.067 56.3821 17.067 54.4017C17.067 52.4213 16.2813 50.5218 14.8824 49.1202V49.1202Z"
            fill="#9EADB2"
          />
          <path
            d="M58.6834 23.0408C61.8059 16.1321 63.6085 8.70027 63.9982 1.12869C64.0067 0.97916 63.9837 0.829506 63.9306 0.689467C63.8775 0.549429 63.7955 0.422145 63.6899 0.315902C63.5837 0.209593 63.4565 0.126679 63.3163 0.0724881C63.1762 0.0182973 63.0262 -0.00597125 62.8762 0.00124186C55.2833 0.354442 47.825 2.13554 40.8918 5.25127L58.6834 23.0408Z"
            fill="#9EADB2"
          />
          <path
            d="M38.8569 6.23267C17.8134 16.7658 9.48979 36.7942 9.38313 37.0587C9.30522 37.2527 9.28602 37.4653 9.32793 37.6701C9.36983 37.8749 9.471 38.0629 9.61885 38.2107L25.7903 54.3843C25.9389 54.533 26.1281 54.6346 26.3341 54.6761C26.5402 54.7177 26.754 54.6974 26.9486 54.6179C27.212 54.5112 47.1421 46.09 57.6991 25.0718L38.8569 6.23267ZM35.2007 35.2006C33.935 35.2006 32.6977 34.8253 31.6454 34.1221C30.593 33.4188 29.7727 32.4193 29.2884 31.2499C28.804 30.0805 28.6773 28.7937 28.9242 27.5522C29.1711 26.3108 29.7806 25.1704 30.6756 24.2754C31.5706 23.3803 32.7109 22.7708 33.9522 22.5239C35.1936 22.2769 36.4803 22.4037 37.6497 22.888C38.819 23.3724 39.8185 24.1927 40.5217 25.2452C41.2249 26.2976 41.6002 27.535 41.6002 28.8008C41.6002 30.4981 40.926 32.1259 39.7258 33.3262C38.5257 34.5264 36.898 35.2006 35.2007 35.2006Z"
            fill="#9EADB2"
          />
        </svg>
      );
    },
  },
  {
    name: "Innovating Trading and Investments",
    description:
      "Passion is what fuels our team at Dalan. We're passionate about creating a trading platform that can make a real difference, empowering traders, and making it easy for investors to earn returns.",
    className:
      "lg:after:content-[''] lg:after:right-0 lg:after:h-5/6 lg:after:w-px lg:after:absolute lg:after:bg-gray-secondary-400/80 before:top-0 before:w-full sm:before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/80 before:content-[''] sm:before:h-0",
    icon: function ResilienceIcon() {
      return (
        <svg
          className="h-14 w-14 sm:h-16 sm:w-16"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M52.775 32.735C43.931 28.066 30.225 33.01 24.975 37.795C24.636 37.253 24.214 36.643 23.74 35.958C22.22 33.758 20.328 31.024 19.754 28.482C19.3127 25.6915 19.088 22.8711 19.082 20.046C19.8457 20.1458 20.6196 20.1405 21.382 20.03C21.416 20.024 21.451 20.018 21.482 20.01C22.719 19.7 26.5 17.974 27.672 16C28.1742 15.2523 28.4236 14.3633 28.3836 13.4635C28.3437 12.5636 28.0165 11.7003 27.45 11C28.0001 9.64425 28.2557 8.18705 28.2 6.725C28.2014 6.17523 28.0871 5.63133 27.8643 5.12872C27.6415 4.62612 27.3153 4.1761 26.907 3.808C24.957 2.215 21.348 2 18.074 2C10.813 2 6.38996 20.582 4.82396 28.571C2.18696 42.041 6.50196 54.808 8.92396 57.291C12.25 60.699 19.842 60.808 23.657 60.368C25.982 61.411 30.418 62 35.846 62C36.4993 62 37.166 61.9917 37.846 61.975C46.222 61.765 53.046 58.935 55.584 57.083C57.3228 55.803 58.7243 54.1195 59.6678 52.1774C60.6113 50.2354 61.0685 48.093 61 45.935C60.856 40.775 57.965 36.1 52.775 32.735ZM50.288 46.035C46.4048 48.3551 41.9624 49.5721 37.439 49.555C35.2973 49.5523 33.1635 49.2941 31.083 48.786C30.8315 48.7178 30.6166 48.5542 30.4839 48.3299C30.3513 48.1057 30.3114 47.8385 30.3728 47.5853C30.4342 47.3321 30.592 47.1128 30.8126 46.9742C31.0332 46.8355 31.2992 46.7885 31.554 46.843C37.5572 48.3739 43.9223 47.4669 49.259 44.32C49.3716 44.2524 49.4964 44.2077 49.6263 44.1884C49.7562 44.1691 49.8886 44.1755 50.016 44.2073C50.1434 44.2392 50.2633 44.2958 50.3688 44.374C50.4743 44.4522 50.5634 44.5504 50.631 44.663C50.6985 44.7756 50.7432 44.9004 50.7626 45.0303C50.7819 45.1602 50.7755 45.2926 50.7436 45.42C50.7118 45.5474 50.6551 45.6673 50.5769 45.7728C50.4988 45.8783 50.4006 45.9674 50.288 46.035Z"
            fill="#9EADB2"
          />
        </svg>
      );
    },
  },
  {
    name: "Enabling Success for All",
    description:
      "Inclusivity is a vital part of our core values. Our platform is designed to give everyone the opportunity to invest and trade, regardless of their level of experience. We believe that by providing access to funding and the right tools, we can enable our users to reach their full potential.",
    className:
      "sm:after:content-[''] sm:after:right-0 sm:after:h-5/6 sm:after:w-px sm:after:absolute sm:after:bg-gray-secondary-400/80 lg:after:w-0 before:top-0 before:w-full sm:before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/80 before:content-[''] lg:before:h-0",
    icon: function TeamworkIcon() {
      return (
        <svg
          className="h-14 w-14 sm:h-16 sm:w-16"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M11.9999 19.9998C15.6818 19.9998 18.6666 17.0151 18.6666 13.3332C18.6666 9.65127 15.6818 6.6665 11.9999 6.6665C8.31802 6.6665 5.33325 9.65127 5.33325 13.3332C5.33325 17.0151 8.31802 19.9998 11.9999 19.9998Z"
            fill="#9EADB2"
          />
          <path
            d="M31.9998 19.9999C37.1545 19.9999 41.3332 15.8212 41.3332 10.6666C41.3332 5.51193 37.1545 1.33325 31.9998 1.33325C26.8452 1.33325 22.6665 5.51193 22.6665 10.6666C22.6665 15.8212 26.8452 19.9999 31.9998 19.9999Z"
            fill="#9EADB2"
          />
          <path
            d="M17.6959 47.8812C15.9119 47.4345 14.6666 45.8385 14.6666 43.9998V29.3332C14.6666 26.7918 15.6906 24.4878 17.3439 22.8025C16.9093 22.7132 16.4599 22.6665 15.9999 22.6665H7.99992C4.32392 22.6665 1.33325 25.6572 1.33325 29.3332V41.3332C1.33325 41.9078 1.69992 42.4158 2.24525 42.5985L5.41859 43.6558L6.67192 57.4545C6.73459 58.1398 7.31059 58.6665 7.99992 58.6665H15.9999C16.6893 58.6665 17.2653 58.1398 17.3279 57.4532L18.1866 48.0025L17.6959 47.8812Z"
            fill="#9EADB2"
          />
          <path
            d="M51.9999 19.9998C55.6818 19.9998 58.6666 17.0151 58.6666 13.3332C58.6666 9.65127 55.6818 6.6665 51.9999 6.6665C48.318 6.6665 45.3333 9.65127 45.3333 13.3332C45.3333 17.0151 48.318 19.9998 51.9999 19.9998Z"
            fill="#9EADB2"
          />
          <path
            d="M46.3039 47.8812C48.0879 47.4345 49.3332 45.8385 49.3332 43.9998V29.3332C49.3332 26.7918 48.3092 24.4878 46.6559 22.8025C47.0906 22.7132 47.5399 22.6665 47.9999 22.6665H55.9999C59.6759 22.6665 62.6666 25.6572 62.6666 29.3332V41.3332C62.6666 41.9078 62.2999 42.4158 61.7546 42.5985L58.5812 43.6558L57.3279 57.4545C57.2652 58.1398 56.6892 58.6665 55.9999 58.6665H47.9999C47.3106 58.6665 46.7346 58.1398 46.6719 57.4532L45.8132 48.0025L46.3039 47.8812Z"
            fill="#9EADB2"
          />
          <path
            d="M39.9999 22.6665H23.9999C20.3239 22.6665 17.3333 25.6572 17.3333 29.3332V43.9998C17.3333 44.6118 17.7493 45.1452 18.3426 45.2932L22.7506 46.3945L24.0039 61.4438C24.0626 62.1358 24.6399 62.6665 25.3333 62.6665H38.6666C39.3599 62.6665 39.9373 62.1358 39.9959 61.4438L41.2493 46.3945L45.6573 45.2932C46.2506 45.1452 46.6666 44.6118 46.6666 43.9998V29.3332C46.6666 25.6572 43.6759 22.6665 39.9999 22.6665Z"
            fill="#9EADB2"
          />
        </svg>
      );
    },
  },
  {
    name: "Empowering Traders and Investors",
    description:
      "We believe that success should be shared. Our platform is built on the principle of collaboration between traders and investors, with both parties benefiting from mutual support.",
    className:
      "lg:after:content-[''] lg:after:right-0 lg:after:h-5/6 lg:after:w-px lg:after:absolute lg:after:bg-gray-secondary-400/80 before:top-0 before:w-full sm:before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/80 before:content-['']",
    icon: function IntegrityIcon() {
      return (
        <svg
          className="h-14 w-14 sm:h-16 sm:w-16"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M61.7071 19.293L47.7071 5.29303C47.5195 5.10556 47.2652 5.00024 47.0001 5.00024C46.7349 5.00024 46.4806 5.10556 46.2931 5.29303L43.5861 8.00003H37.4471C35.7263 7.99597 34.0219 8.33377 32.4328 8.99383C30.8437 9.65388 29.4015 10.623 28.1901 11.845L17.8751 22.638C17.3045 23.2362 16.9741 24.0236 16.9469 24.8498C16.9197 25.676 17.1976 26.4834 17.7276 27.1178C18.2575 27.7523 19.0025 28.1694 19.8204 28.2897C20.6383 28.41 21.4718 28.225 22.1621 27.77L33.5001 20.276C35.3355 22.0439 37.7929 23.0184 40.3411 22.989C42.2615 23.0647 44.159 22.5492 45.7771 21.512L56.1371 32.224C56.1371 32.224 57.9891 27.771 57.9891 24.424L61.7071 20.706C61.8942 20.5185 61.9993 20.2645 61.9993 19.9995C61.9993 19.7346 61.8942 19.4805 61.7071 19.293Z"
            fill="#9EADB2"
          />
          <path
            d="M56.9 35.874L46.654 25.343L45.307 23.921C43.7473 24.6265 42.0549 24.9906 40.343 24.989C37.8378 25.0097 35.3911 24.2325 33.357 22.77L23.265 29.438C22.2331 30.1184 20.998 30.4221 19.7682 30.2978C18.5384 30.1736 17.3891 29.629 16.514 28.756C15.5298 27.7611 14.9708 26.4225 14.9551 25.023C14.9394 23.6236 15.4683 22.2728 16.43 21.256L26.744 10.463C27.3624 9.85007 28.0315 9.29041 28.744 8.79003C27.1078 8.27494 25.4034 8.00863 23.688 8.00003H20.414L17.707 5.29303C17.5195 5.10556 17.2652 5.00024 17 5.00024C16.7349 5.00024 16.4806 5.10556 16.293 5.29303L2.29303 19.293C2.10556 19.4806 2.00024 19.7349 2.00024 20C2.00024 20.2652 2.10556 20.5195 2.29303 20.707L5.93503 24.349C5.55637 27.1543 5.84205 30.0094 6.76903 32.684C7.70227 32.1909 8.7375 31.9217 9.79276 31.8979C10.848 31.8741 11.8943 32.0963 12.8489 32.5469C13.8034 32.9975 14.6399 33.6641 15.2922 34.4939C15.9445 35.3238 16.3947 36.2941 16.607 37.328C18.0024 37.5628 19.2912 38.2227 20.2974 39.2175C21.3037 40.2123 21.9783 41.4935 22.229 42.886C23.4799 43.1079 24.6439 43.6748 25.5898 44.5229C26.5356 45.3711 27.2257 46.4666 27.582 47.686C28.7945 47.7701 29.9632 48.1729 30.97 48.8537C31.9768 49.5345 32.7859 50.4691 33.3154 51.563C33.845 52.657 34.0762 53.8713 33.9857 55.0833C33.8952 56.2953 33.4862 57.4619 32.8 58.465C33.4871 59.0742 34.3327 59.4763 35.2389 59.6247C36.1451 59.7732 37.0747 59.662 37.9203 59.3039C38.7659 58.9458 39.4927 58.3556 40.0167 57.6015C40.5407 56.8475 40.8404 55.9604 40.881 55.043C41.631 55.3622 42.4489 55.4886 43.2603 55.4106C44.0716 55.3326 44.8505 55.0527 45.5259 54.5964C46.2013 54.1402 46.7517 53.522 47.1269 52.7985C47.5021 52.0749 47.6902 51.2689 47.674 50.454C48.5531 50.7241 49.4905 50.7412 50.3788 50.5031C51.2671 50.2651 52.0704 49.7816 52.6966 49.1081C53.3228 48.4346 53.7466 47.5983 53.9195 46.6951C54.0924 45.7918 54.0073 44.8582 53.674 44.001C54.3077 43.9771 54.9302 43.8265 55.5047 43.5581C56.0792 43.2896 56.5941 42.9088 57.019 42.438C57.8353 41.5328 58.2771 40.3512 58.255 39.1325C58.2329 37.9139 57.7485 36.7491 56.9 35.874Z"
            fill="#9EADB2"
          />
          <path
            d="M30.564 51.109C30.1102 50.6526 29.5704 50.2907 28.9758 50.0444C28.3812 49.798 27.7436 49.6722 27.1 49.674C26.6815 49.68 26.2654 49.7395 25.862 49.851C25.8955 49.1338 25.7694 48.4181 25.4928 47.7556C25.2162 47.093 24.7959 46.5001 24.2624 46.0197C23.7289 45.5393 23.0953 45.1832 22.4075 44.9773C21.7197 44.7714 20.9948 44.7208 20.285 44.829C20.3985 44.07 20.3314 43.2949 20.0891 42.5668C19.8469 41.8386 19.4363 41.1778 18.8907 40.6381C18.3451 40.0983 17.68 39.6949 16.9492 39.4605C16.2185 39.2261 15.4427 39.1673 14.685 39.289C14.719 39.0749 14.7381 38.8587 14.742 38.642C14.7368 38.0022 14.6028 37.37 14.348 36.7831C14.0932 36.1962 13.7229 35.6667 13.259 35.226C12.3436 34.3566 11.1234 33.8815 9.86118 33.9028C8.59892 33.9241 7.39551 34.4402 6.50999 35.34L5.92799 35.94C5.27761 36.6086 4.83635 37.4524 4.65827 38.368C4.48019 39.2836 4.57302 40.2312 4.9254 41.0949C5.27777 41.9585 5.87438 42.7006 6.64216 43.2303C7.40993 43.76 8.31552 44.0542 9.24799 44.077H9.36899C9.44999 44.077 9.52699 44.058 9.60699 44.054C9.39646 44.894 9.41398 45.775 9.65772 46.606C9.90147 47.437 10.3626 48.1879 10.9935 48.7811C11.6245 49.3743 12.4023 49.7883 13.2467 49.9805C14.0911 50.1726 14.9715 50.1358 15.797 49.874C15.797 49.901 15.789 49.926 15.789 49.953C15.789 51.2526 16.3052 52.4989 17.2242 53.4178C18.1431 54.3367 19.3894 54.853 20.689 54.853C21.0313 54.8515 21.3724 54.8143 21.707 54.742C21.698 54.862 21.672 54.979 21.672 55.101C21.6721 56.0701 21.9596 57.0174 22.4981 57.8231C23.0366 58.6288 23.8019 59.2567 24.6973 59.6275C25.5926 59.9983 26.5778 60.0953 27.5283 59.9061C28.4787 59.717 29.3518 59.2503 30.037 58.565L30.562 58.04C31.4804 57.1206 31.9964 55.8744 31.9968 54.5749C31.9972 53.2754 31.4818 52.0289 30.564 51.109Z"
            fill="#9EADB2"
          />
        </svg>
      );
    },
  },
];

export function FeaturesGridDark() {
  return (
    <section className="relative overflow-hidden bg-slate-700 pt-16 pb-6 sm:pb-12 lg:pt-28 lg:pb-20">
      <Container>
        <div className="relative mx-auto w-full max-w-lg px-4 sm:max-w-3xl sm:px-0 lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-center sm:text-5xl sm:leading-tight">
            The values that drive us.
          </h2>
          <div className="mt-10 grid sm:mt-16 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={clsx(
                  feature.className,
                  "relative flex flex-col items-center justify-center py-10 px-0 sm:py-12 sm:px-8 xl:py-16 xl:px-12"
                )}
              >
                <div className="flex flex-1 flex-col">
                  <feature.icon />
                  <h3 className="mt-8 text-3xl font-semibold leading-tighter text-white sm:mt-12">
                    {feature.name}
                  </h3>
                  <p className="mt-5 leading-relaxed text-slate-50 sm:mt-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
