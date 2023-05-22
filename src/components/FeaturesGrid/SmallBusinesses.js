import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

const features = [
  {
    name: 'Access to Expert Traders',
    description:
      'Dalan connects small business with a diverse network of expert traders who provide invaluable insights and advice.',
    href: '#',
    className:
      "sm:after:content-[''] sm:after:right-0 sm:after:h-5/6 sm:after:w-px sm:after:absolute sm:after:bg-gray-secondary-400/60",
    icon: function ClipsIcon() {
      return (
        <svg
          className="h-14 w-14 sm:h-16 sm:w-16"
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clipPath="url(#clip0_24_170)">
            <path
              d="M10 54C8.4087 54 6.88258 53.3679 5.75736 52.2426C4.63214 51.1174 4 49.5913 4 48V14H2C1.46957 14 0.960859 14.2107 0.585786 14.5858C0.210714 14.9609 0 15.4696 0 16L0 54C0 55.0609 0.421427 56.0783 1.17157 56.8284C1.92172 57.5786 2.93913 58 4 58H54C54.5304 58 55.0391 57.7893 55.4142 57.4142C55.7893 57.0391 56 56.5304 56 56V54H10Z"
              fill="#9EADB2"
            />
            <path
              d="M60 6H12C10.9391 6 9.92172 6.42143 9.17157 7.17157C8.42143 7.92172 8 8.93913 8 10V46C8 47.0609 8.42143 48.0783 9.17157 48.8284C9.92172 49.5786 10.9391 50 12 50H60C61.0609 50 62.0783 49.5786 62.8284 48.8284C63.5786 48.0783 64 47.0609 64 46V10C64 8.93913 63.5786 7.92172 62.8284 7.17157C62.0783 6.42143 61.0609 6 60 6ZM45.542 28.842L31.542 37.842C31.3909 37.9395 31.2162 37.9944 31.0365 38.001C30.8568 38.0075 30.6786 37.9655 30.5207 37.8793C30.3629 37.7931 30.2312 37.6659 30.1396 37.5112C30.0479 37.3564 29.9997 37.1798 30 37V19C29.9997 18.8202 30.0479 18.6436 30.1396 18.4888C30.2312 18.3341 30.3629 18.2069 30.5207 18.1207C30.6786 18.0345 30.8568 17.9925 31.0365 17.999C31.2162 18.0056 31.3909 18.0605 31.542 18.158L45.542 27.158C45.6832 27.2485 45.7994 27.373 45.8799 27.5201C45.9603 27.6673 46.0025 27.8323 46.0025 28C46.0025 28.1677 45.9603 28.3327 45.8799 28.4799C45.7994 28.627 45.6832 28.7515 45.542 28.842Z"
              fill="#334155"
            />
          </g>
          <defs>
            <clipPath id="clip0_24_170">
              <rect width={64} height={64} fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
  },
  {
    name: 'Invest with Confidence',
    description:
      'Invest with confidence on Dalan. Our risk management system sets limits and stop-loss mechanisms to safeguard your investments.',
    href: '#',
    className:
      "lg:after:content-[''] lg:after:right-0 lg:after:h-5/6 lg:after:w-px lg:after:absolute lg:after:bg-gray-secondary-400/60 before:top-0 before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/60 before:content-[''] sm:before:h-0",
    icon: function CloudIcon() {
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
            d="M61.3333 57.3334H49.3333C48.9797 57.3334 48.6406 57.1929 48.3905 56.9429C48.1405 56.6928 48 56.3537 48 56.0001C48 55.6465 48.1405 55.3073 48.3905 55.0573C48.6406 54.8072 48.9797 54.6667 49.3333 54.6667H61.3333C61.687 54.6667 62.0261 54.8072 62.2761 55.0573C62.5262 55.3073 62.6667 55.6465 62.6667 56.0001C62.6667 56.3537 62.5262 56.6928 62.2761 56.9429C62.0261 57.1929 61.687 57.3334 61.3333 57.3334Z"
            fill="#9EADB2"
          />
          <path
            d="M37.3333 49.3333C35.7971 49.3352 34.3084 49.8667 33.1183 50.8382C31.9282 51.8097 31.1095 53.1618 30.8 54.6666H2.66666C2.31304 54.6666 1.9739 54.8071 1.72385 55.0571C1.4738 55.3072 1.33333 55.6463 1.33333 55.9999C1.33333 56.3535 1.4738 56.6927 1.72385 56.9427C1.9739 57.1928 2.31304 57.3333 2.66666 57.3333H30.8C31.0523 58.5691 31.65 59.7081 32.5237 60.6178C33.3975 61.5276 34.5114 62.1708 35.7361 62.4728C36.9608 62.7747 38.246 62.723 39.4425 62.3237C40.639 61.9244 41.6977 61.1938 42.4955 60.2168C43.2934 59.2398 43.7977 58.0566 43.9499 56.8044C44.1021 55.5523 43.896 54.2826 43.3554 53.1429C42.8149 52.0033 41.9621 51.0403 40.8961 50.366C39.8301 49.6916 38.5947 49.3335 37.3333 49.3333Z"
            fill="#9EADB2"
          />
          <path
            d="M53.176 20.2667C52.6411 15.5026 50.5156 11.058 47.1429 7.65103C43.7702 4.24407 39.3473 2.07375 34.5889 1.49074C29.8304 0.907727 25.0144 1.94608 20.919 4.43804C16.8235 6.92999 13.6879 10.73 12.0187 15.224C8.61546 16.1899 5.67607 18.3533 3.74218 21.3156C1.80828 24.2778 1.01021 27.8392 1.49504 31.3434C1.97987 34.8477 3.71493 38.0586 6.38047 40.3844C9.046 42.7103 12.4624 43.9944 16 44H50.6667C53.6297 43.9984 56.4874 42.9007 58.6894 40.9181C60.8915 38.9355 62.2822 36.2084 62.5938 33.2617C62.9053 30.3151 62.1157 27.3574 60.3769 24.9582C58.6381 22.559 56.0732 20.8878 53.176 20.2667ZM39.3733 25.1307L28.7067 31.7973C28.5048 31.9235 28.2729 31.9933 28.035 31.9995C27.7971 32.0058 27.5618 31.9482 27.3536 31.8329C27.1455 31.7175 26.972 31.5485 26.8512 31.3434C26.7304 31.1383 26.6667 30.9047 26.6667 30.6667V17.3333C26.6667 17.0953 26.7304 16.8617 26.8512 16.6566C26.972 16.4515 27.1455 16.2825 27.3536 16.1671C27.5618 16.0518 27.7971 15.9942 28.035 16.0005C28.2729 16.0067 28.5048 16.0765 28.7067 16.2027L39.3733 22.8693C39.5663 22.9889 39.7255 23.1558 39.8359 23.3541C39.9463 23.5524 40.0043 23.7757 40.0043 24.0027C40.0043 24.2297 39.9463 24.4529 39.8359 24.6512C39.7255 24.8496 39.5663 25.0164 39.3733 25.136V25.1307Z"
            fill="#334155"
          />
        </svg>
      )
    },
  },
  {
    name: 'Real-Time Analytics',
    description:
      'Dalan offers real-time analytics tools for small business. Our advanced interface visualizes data to give valuable insights for portfolio management.',
    href: '#',
    className:
      "sm:after:content-[''] sm:after:right-0 sm:after:h-5/6 sm:after:w-px sm:after:absolute sm:after:bg-gray-secondary-400/60 lg:after:w-0 before:top-0 before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/60 before:content-[''] lg:before:h-0",
    icon: function TranscriptsIcon() {
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
            d="M34.6667 18.6666H43.2187C43.5723 18.6665 43.9114 18.526 44.1614 18.2759L49.3334 13.1039C49.384 13.044 49.4286 12.9792 49.4667 12.9106C50.3256 13.3376 51.3083 13.4454 52.2393 13.2146C53.1702 12.9839 53.9888 12.4296 54.5488 11.6509C55.1088 10.8721 55.3736 9.91966 55.296 8.96365C55.2184 8.00763 54.8034 7.11035 54.1252 6.43212C53.447 5.75389 52.5497 5.33891 51.5937 5.26131C50.6376 5.1837 49.6852 5.44855 48.9065 6.00851C48.1277 6.56847 47.5735 7.38708 47.3427 8.31806C47.1119 9.24905 47.2197 10.2318 47.6467 11.0906C47.5781 11.1287 47.5134 11.1733 47.4534 11.2239L42.6667 15.9999H34.6667C34.3131 15.9999 33.9739 16.1404 33.7239 16.3905C33.4738 16.6405 33.3334 16.9796 33.3334 17.3333C33.3334 17.6869 33.4738 18.026 33.7239 18.2761C33.9739 18.5261 34.3131 18.6666 34.6667 18.6666Z"
            fill="#9EADB2"
          />
          <path
            d="M55.2187 22.6666C54.3856 22.6682 53.574 22.9308 52.8979 23.4175C52.2218 23.9042 51.7152 24.5905 51.4494 25.38C51.3742 25.357 51.2969 25.3414 51.2187 25.3333H30.6667V10.6666C30.6867 9.78568 30.528 8.90979 30.2001 8.09189C29.8721 7.27399 29.3818 6.53105 28.7587 5.90795C28.1356 5.28486 27.3927 4.79453 26.5748 4.4666C25.7569 4.13866 24.881 3.97993 24 3.99998C22.63 3.97945 21.2893 4.3974 20.1737 5.19282C19.058 5.98823 18.2259 7.11945 17.7987 8.42131C17.7102 8.68692 17.5404 8.91794 17.3133 9.08164C17.0862 9.24533 16.8133 9.33338 16.5334 9.33331H16C14.4192 9.31545 12.8507 9.61364 11.3868 10.2104C9.9228 10.8071 8.59281 11.6903 7.47493 12.8082C6.35705 13.9261 5.47381 15.2561 4.87708 16.7201C4.28035 18.184 3.98216 19.7525 4.00003 21.3333C3.98546 24.4576 5.18379 27.4656 7.34269 29.724C9.34597 31.7219 11.973 32.9736 14.7867 33.2706C15.0979 31.133 16.1731 29.1804 17.8134 27.7746C17.9479 27.6626 18.1032 27.5781 18.2704 27.5261C18.4376 27.4741 18.6135 27.4555 18.7878 27.4714C18.9622 27.4873 19.1318 27.5374 19.2868 27.6188C19.4418 27.7002 19.5793 27.8114 19.6914 27.946C19.8034 28.0805 19.8879 28.2359 19.9399 28.4031C19.992 28.5703 20.0105 28.7461 19.9946 28.9205C19.9787 29.0949 19.9286 29.2644 19.8472 29.4194C19.7658 29.5744 19.6546 29.7119 19.52 29.824C18.8266 30.4247 18.272 31.1688 17.8944 32.005C17.5169 32.8411 17.3254 33.7493 17.3334 34.6666C17.3128 36.0367 17.7308 37.3773 18.5262 38.493C19.3216 39.6086 20.4528 40.4408 21.7547 40.868C21.921 40.9233 22.0748 41.0109 22.2074 41.1256C22.3399 41.2404 22.4485 41.3802 22.527 41.5369C22.6055 41.6936 22.6523 41.8643 22.6648 42.0392C22.6774 42.214 22.6554 42.3896 22.6 42.556C22.5447 42.7223 22.4571 42.8761 22.3424 43.0086C22.2276 43.1411 22.0878 43.2497 21.9311 43.3282C21.7744 43.4067 21.6037 43.4536 21.4288 43.4661C21.254 43.4787 21.0784 43.4566 20.912 43.4013C19.2829 42.8707 17.839 41.8863 16.7498 40.5637C15.6605 39.2411 14.9712 37.6353 14.7627 35.9346C11.6449 35.6581 8.69055 34.4181 6.30936 32.3866C5.58723 32.9931 5.00639 33.75 4.60748 34.6045C4.20858 35.459 4.00125 36.3903 4.00003 37.3333C3.98461 38.3809 4.23747 39.4151 4.73457 40.3374C5.23167 41.2597 5.95647 42.0395 6.84003 42.6026C7.1054 42.768 7.3042 43.0214 7.40169 43.3185C7.49918 43.6156 7.48915 43.9375 7.37336 44.228C6.91258 45.4325 6.67318 46.7103 6.66669 48C6.64883 49.5808 6.94702 51.1493 7.54375 52.6132C8.14048 54.0772 9.02372 55.4072 10.1416 56.5251C11.2595 57.6429 12.5895 58.5262 14.0534 59.1229C15.5174 59.7197 17.0859 60.0178 18.6667 60C20.2475 60.0178 21.816 59.7197 23.2799 59.1229C24.7439 58.5262 26.0739 57.6429 27.1918 56.5251C28.3097 55.4072 29.1929 54.0772 29.7896 52.6132C30.3864 51.1493 30.6846 49.5808 30.6667 48H42.6667L47.448 52.7813C47.508 52.8319 47.5728 52.8766 47.6414 52.9146C47.2153 53.7736 47.1084 54.756 47.3398 55.6865C47.5712 56.617 48.1258 57.435 48.9045 57.9943C49.6832 58.5537 50.6354 58.8181 51.5911 58.7403C52.5467 58.6625 53.4436 58.2475 54.1216 57.5696C54.7996 56.8916 55.2145 55.9947 55.2924 55.039C55.3702 54.0834 55.1058 53.1312 54.5464 52.3524C53.987 51.5737 53.169 51.0191 52.2386 50.7878C51.3081 50.5564 50.3257 50.6633 49.4667 51.0893C49.4286 51.0207 49.3839 50.956 49.3334 50.896L44.1614 45.724C43.9114 45.4739 43.5723 45.3334 43.2187 45.3333H30.6667V28H51.2187C51.2969 27.9919 51.3742 27.9763 51.4494 27.9533C51.6873 28.6474 52.112 29.2625 52.6768 29.731C53.2415 30.1995 53.9244 30.5033 54.6506 30.609C55.3767 30.7147 56.1179 30.6182 56.7927 30.3302C57.4676 30.0421 58.05 29.5736 58.476 28.9761C58.902 28.3787 59.1551 27.6754 59.2074 26.9435C59.2598 26.2116 59.1094 25.4794 58.7728 24.8274C58.4362 24.1754 57.9264 23.6287 57.2994 23.2476C56.6724 22.8664 55.9525 22.6654 55.2187 22.6666Z"
            fill="#334155"
          />
          <path
            d="M46.116 36.0466C46.0408 36.0236 45.9636 36.008 45.8854 35.9999H34.6667C34.3131 35.9999 33.9739 36.1404 33.7239 36.3905C33.4738 36.6405 33.3334 36.9796 33.3334 37.3333C33.3334 37.6869 33.4738 38.026 33.7239 38.2761C33.9739 38.5261 34.3131 38.6666 34.6667 38.6666H45.8854C45.9636 38.6585 46.0408 38.6429 46.116 38.6199C46.4209 39.5174 47.0346 40.2774 47.8477 40.7645C48.6607 41.2517 49.6204 41.4343 50.5555 41.2798C51.4907 41.1252 52.3406 40.6437 52.9537 39.9209C53.5669 39.1981 53.9035 38.2811 53.9035 37.3333C53.9035 36.3854 53.5669 35.4684 52.9537 34.7456C52.3406 34.0228 51.4907 33.5413 50.5555 33.3868C49.6204 33.2323 48.6607 33.4148 47.8477 33.902C47.0346 34.3891 46.4209 35.1491 46.116 36.0466Z"
            fill="#9EADB2"
          />
        </svg>
      )
    },
  },
  {
    name: 'Security is Our Top Priority',
    description:
      'At Dalan, we use the latest encryption technology to keep your personal information and investments secure for confident investing.',
    href: '#',
    className:
      "lg:after:content-[''] lg:after:right-0 lg:after:h-5/6 lg:after:w-px lg:after:absolute lg:after:bg-gray-secondary-400/60 before:top-0 before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/60 before:content-['']",
    icon: function EditingIcon() {
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
            d="M60.1573 8.00007L62.5333 3.26274C62.6588 3.01238 62.7022 2.72888 62.6574 2.45245C62.6127 2.17602 62.4821 1.92069 62.284 1.72269C62.086 1.52468 61.8307 1.39404 61.5543 1.34929C61.2779 1.30455 60.9944 1.34797 60.744 1.4734L56 3.84274L51.2627 1.4734C51.0121 1.34551 50.7275 1.30014 50.4496 1.34378C50.1717 1.38743 49.9147 1.51786 49.7154 1.71641C49.5161 1.91496 49.3847 2.17146 49.3401 2.4492C49.2954 2.72694 49.3397 3.0117 49.4667 3.26274L51.8427 8.00007L49.4667 12.7374C49.3372 12.9886 49.2909 13.2745 49.3345 13.5537C49.378 13.833 49.5092 14.0912 49.7091 14.291C49.9089 14.4909 50.1671 14.622 50.4463 14.6656C50.7256 14.7092 51.0114 14.6629 51.2627 14.5334L56 12.1574L60.7373 14.5334C60.9886 14.6629 61.2744 14.7092 61.5537 14.6656C61.8329 14.622 62.0911 14.4909 62.2909 14.291C62.4908 14.0912 62.622 13.833 62.6655 13.5537C62.7091 13.2745 62.6628 12.9886 62.5333 12.7374L60.1573 8.00007Z"
            fill="#9EADB2"
          />
          <path
            d="M26.276 1.72419C26.0783 1.52625 25.8233 1.39554 25.5471 1.35055C25.271 1.30556 24.9877 1.34858 24.7373 1.47352L20 3.84285L15.2627 1.47352C15.0123 1.34809 14.7288 1.30466 14.4524 1.34941C14.1759 1.39415 13.9206 1.52479 13.7226 1.7228C13.5246 1.92081 13.394 2.17613 13.3492 2.45256C13.3045 2.72899 13.3479 3.01249 13.4733 3.26285L15.8427 8.00019L13.4733 12.7375C13.3454 12.9881 13.3001 13.2727 13.3437 13.5506C13.3874 13.8285 13.5178 14.0855 13.7163 14.2848C13.9149 14.4841 14.1714 14.6154 14.4491 14.6601C14.7269 14.7048 15.0116 14.6605 15.2627 14.5335L20 12.1575L24.7373 14.5335C24.9886 14.663 25.2744 14.7093 25.5537 14.6657C25.8329 14.6221 26.0911 14.491 26.2909 14.2911C26.4908 14.0913 26.622 13.8331 26.6655 13.5539C26.7091 13.2746 26.6628 12.9887 26.5333 12.7375L24.1573 8.00019L26.5333 3.26285C26.6574 3.01185 26.6994 2.72814 26.6532 2.45196C26.607 2.17578 26.475 1.92115 26.276 1.72419Z"
            fill="#9EADB2"
          />
          <path
            d="M62.276 37.7241C62.0783 37.5261 61.8233 37.3954 61.5471 37.3504C61.271 37.3054 60.9877 37.3485 60.7373 37.4734L56 39.8427L51.2627 37.4734C51.0121 37.3455 50.7275 37.3001 50.4496 37.3438C50.1717 37.3874 49.9147 37.5179 49.7154 37.7164C49.5161 37.915 49.3847 38.1715 49.3401 38.4492C49.2954 38.7269 49.3397 39.0117 49.4667 39.2627L51.8427 44.0001L49.4667 48.7374C49.3372 48.9886 49.2909 49.2745 49.3345 49.5537C49.378 49.833 49.5092 50.0912 49.7091 50.291C49.9089 50.4909 50.1671 50.622 50.4463 50.6656C50.7256 50.7092 51.0114 50.6629 51.2627 50.5334L56 48.1574L60.7373 50.5334C60.9886 50.6629 61.2744 50.7092 61.5537 50.6656C61.8329 50.622 62.0911 50.4909 62.2909 50.291C62.4908 50.0912 62.622 49.833 62.6655 49.5537C62.7091 49.2745 62.6628 48.9886 62.5333 48.7374L60.1573 44.0001L62.5333 39.2627C62.6574 39.0117 62.6994 38.728 62.6532 38.4518C62.607 38.1757 62.475 37.921 62.276 37.7241Z"
            fill="#9EADB2"
          />
          <path
            d="M47.6093 23.0573L40.9427 16.3906C40.6926 16.1407 40.3535 16.0002 40 16.0002C39.6464 16.0002 39.3074 16.1407 39.0573 16.3906L3.05733 52.3906C2.80737 52.6407 2.66695 52.9797 2.66695 53.3333C2.66695 53.6868 2.80737 54.0259 3.05733 54.276L9.724 60.9426C9.97403 61.1926 10.3131 61.333 10.6667 61.333C11.0202 61.333 11.3593 61.1926 11.6093 60.9426L47.6093 24.9426C47.8593 24.6926 47.9997 24.3535 47.9997 24C47.9997 23.6464 47.8593 23.3073 47.6093 23.0573ZM38.6667 30.1146L33.8853 25.3333L40 19.2186L44.7813 24L38.6667 30.1146Z"
            fill="#334155"
          />
        </svg>
      )
    },
  },
  {
    name: 'Community of Knowledge-Sharing',
    description:
      "Join our community platform at Dalan for knowledge-sharing and mutual support. Collaborate with experienced investors on Dalan's community platform for informed decision-making and shared learning.",
    href: '#',
    className:
      "sm:after:content-[''] sm:after:right-0 sm:after:h-5/6 sm:after:w-px sm:after:absolute sm:after:bg-gray-secondary-400/60 before:top-0 before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/60 before:content-['']",
    icon: function MetricsIcon() {
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
            d="M44 58.6665H36C35.6464 58.6665 35.3073 58.526 35.0572 58.276C34.8072 58.0259 34.6667 57.6868 34.6667 57.3332V43.9998C34.6667 43.6462 34.8072 43.3071 35.0572 43.057C35.3073 42.807 35.6464 42.6665 36 42.6665H44C44.3536 42.6665 44.6928 42.807 44.9428 43.057C45.1929 43.3071 45.3334 43.6462 45.3334 43.9998V57.3332C45.3334 57.6868 45.1929 58.0259 44.9428 58.276C44.6928 58.526 44.3536 58.6665 44 58.6665Z"
            fill="#334155"
          />
          <path
            d="M19.372 17.18C18.6426 16.6613 18.0054 16.024 17.4867 15.2947L10.6867 22.088C9.87509 21.5999 8.94707 21.3392 8.00001 21.3333C6.94517 21.3333 5.91403 21.6461 5.03697 22.2322C4.1599 22.8182 3.47632 23.6512 3.07265 24.6257C2.66898 25.6002 2.56336 26.6726 2.76915 27.7072C2.97494 28.7417 3.48289 29.692 4.22877 30.4379C4.97465 31.1838 5.92496 31.6917 6.95953 31.8975C7.99409 32.1033 9.06645 31.9977 10.041 31.594C11.0155 31.1904 11.8485 30.5068 12.4345 29.6297C13.0205 28.7527 13.3333 27.7215 13.3333 26.6667C13.3287 25.7174 13.068 24.7869 12.5787 23.9733L19.372 17.18Z"
            fill="#9EADB2"
          />
          <path
            d="M24 15.9999C26.9455 15.9999 29.3334 13.6121 29.3334 10.6666C29.3334 7.72107 26.9455 5.33325 24 5.33325C21.0545 5.33325 18.6667 7.72107 18.6667 10.6666C18.6667 13.6121 21.0545 15.9999 24 15.9999Z"
            fill="#9EADB2"
          />
          <path
            d="M56 15.9999C58.9455 15.9999 61.3334 13.6121 61.3334 10.6666C61.3334 7.72107 58.9455 5.33325 56 5.33325C53.0545 5.33325 50.6667 7.72107 50.6667 10.6666C50.6667 13.6121 53.0545 15.9999 56 15.9999Z"
            fill="#9EADB2"
          />
          <path
            d="M51.372 17.18C50.6427 16.6613 50.0054 16.024 49.4867 15.2947L42.6934 22.088C41.8817 21.5945 40.95 21.3334 40 21.3334C39.0501 21.3334 38.1184 21.5945 37.3067 22.088L30.5134 15.2947C29.9947 16.024 29.3574 16.6613 28.628 17.18L35.4214 23.98C34.9332 24.7916 34.6725 25.7196 34.6667 26.6667C34.6667 28.0812 35.2286 29.4377 36.2288 30.4379C37.229 31.4381 38.5855 32 40 32C41.4145 32 42.7711 31.4381 43.7713 30.4379C44.7714 29.4377 45.3334 28.0812 45.3334 26.6667C45.3287 25.7174 45.068 24.7869 44.5787 23.9733L51.372 17.18Z"
            fill="#9EADB2"
          />
          <path
            d="M12 58.6665H4.00001C3.64638 58.6665 3.30724 58.526 3.0572 58.276C2.80715 58.0259 2.66667 57.6868 2.66667 57.3332V43.9998C2.66667 43.6462 2.80715 43.3071 3.0572 43.057C3.30724 42.807 3.64638 42.6665 4.00001 42.6665H12C12.3536 42.6665 12.6928 42.807 12.9428 43.057C13.1929 43.3071 13.3333 43.6462 13.3333 43.9998V57.3332C13.3333 57.6868 13.1929 58.0259 12.9428 58.276C12.6928 58.526 12.3536 58.6665 12 58.6665Z"
            fill="#334155"
          />
          <path
            d="M28 58.6665H20C19.6464 58.6665 19.3073 58.526 19.0572 58.276C18.8072 58.0259 18.6667 57.6868 18.6667 57.3332V27.9998C18.6667 27.6462 18.8072 27.3071 19.0572 27.057C19.3073 26.807 19.6464 26.6665 20 26.6665H28C28.3536 26.6665 28.6928 26.807 28.9428 27.057C29.1929 27.3071 29.3334 27.6462 29.3334 27.9998V57.3332C29.3334 57.6868 29.1929 58.0259 28.9428 58.276C28.6928 58.526 28.3536 58.6665 28 58.6665Z"
            fill="#334155"
          />
          <path
            d="M60 58.6665H52C51.6464 58.6665 51.3073 58.526 51.0572 58.276C50.8072 58.0259 50.6667 57.6868 50.6667 57.3332V27.9998C50.6667 27.6462 50.8072 27.3071 51.0572 27.057C51.3073 26.807 51.6464 26.6665 52 26.6665H60C60.3536 26.6665 60.6928 26.807 60.9428 27.057C61.1929 27.3071 61.3334 27.6462 61.3334 27.9998V57.3332C61.3334 57.6868 61.1929 58.0259 60.9428 58.276C60.6928 58.526 60.3536 58.6665 60 58.6665Z"
            fill="#334155"
          />
        </svg>
      )
    },
  },
  {
    name: 'Take control of your investing journey ',
    description:
      "Take control of your investing journey on Dalan's platform. Our intuitive tools empower personal investors to make their own informed decisions.",
    href: '#',
    className:
      "before:top-0 before:w-5/6 before:h-px before:absolute before:bg-gray-secondary-400/60 before:content-['']",
    icon: function AudioIcon() {
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
            d="M54.6666 29.3333C54.6666 28.596 54.0693 28 53.3333 28C52.5973 28 52 28.596 52 29.3333C52 40.3613 43.028 49.3333 32 49.3333C20.972 49.3333 12 40.3613 12 29.3333C12 28.596 11.4026 28 10.6666 28C9.93065 28 9.33331 28.596 9.33331 29.3333C9.33331 41.3813 18.7893 51.236 30.6666 51.932V60H18.6666C17.9306 60 17.3333 60.596 17.3333 61.3333C17.3333 62.0707 17.9306 62.6667 18.6666 62.6667H45.3333C46.0693 62.6667 46.6666 62.0707 46.6666 61.3333C46.6666 60.596 46.0693 60 45.3333 60H33.3333V51.932C45.2106 51.236 54.6666 41.3813 54.6666 29.3333Z"
            fill="#9EADB2"
          />
          <path
            d="M38.6666 27.9999C38.6666 27.2626 39.264 26.6666 40 26.6666H46.6666V19.9999H40C39.264 19.9999 38.6666 19.4039 38.6666 18.6666C38.6666 17.9293 39.264 17.3333 40 17.3333H46.6666V15.9999C46.6666 7.91325 40.0866 1.33325 32 1.33325C23.9133 1.33325 17.3333 7.91325 17.3333 15.9999V17.3333H24C24.736 17.3333 25.3333 17.9293 25.3333 18.6666C25.3333 19.4039 24.736 19.9999 24 19.9999H17.3333V26.6666H24C24.736 26.6666 25.3333 27.2626 25.3333 27.9999C25.3333 28.7373 24.736 29.3333 24 29.3333H17.3333C17.3333 37.4199 23.9133 43.9999 32 43.9999C40.0866 43.9999 46.6666 37.4199 46.6666 29.3333H40C39.264 29.3333 38.6666 28.7373 38.6666 27.9999Z"
            fill="#334155"
          />
        </svg>
      )
    },
  },
]

export function FeaturesGrid() {
  return (
    <section className="relative overflow-hidden bg-amber-50 pt-20 pb-8 lg:pt-28 lg:pb-12">
      <Container>
        <div className="relative mx-auto w-full max-w-lg sm:max-w-3xl lg:mx-0 lg:max-w-none">
          <h2 className="mx-auto max-w-2xl text-center text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight">
            Small Businesses at Daln
          </h2>
          <div className="mt-10 grid sm:mt-16 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={clsx(
                  feature.className,
                  'relative mx-auto flex max-w-md flex-col items-center justify-center py-12 px-8 sm:mx-0 sm:max-w-none xl:py-16 xl:px-12'
                )}
              >
                <div className="flex flex-1 flex-col items-center">
                  <feature.icon />
                  <h3 className="mt-8 text-center text-3xl font-semibold leading-tighter text-slate-900 sm:mt-12">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-center leading-relaxed text-slate-600 sm:mt-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
