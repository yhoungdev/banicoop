const FilledBellIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.99993 4.29398V6.51399M8.01327 1.33398C5.55993 1.33398 3.57327 3.32065 3.57327 5.77398V7.17399C3.57327 7.62732 3.3866 8.30732 3.15327 8.69399L2.3066 10.1073C1.7866 10.9807 2.1466 11.954 3.1066 12.274C6.29412 13.334 9.73908 13.334 12.9266 12.274C13.1369 12.2038 13.3288 12.0873 13.4881 11.933C13.6473 11.7788 13.7699 11.5907 13.8467 11.3827C13.9235 11.1747 13.9525 10.9521 13.9318 10.7313C13.911 10.5106 13.8409 10.2973 13.7266 10.1073L12.8799 8.69399C12.6466 8.30732 12.4599 7.62065 12.4599 7.17399V5.77398C12.4533 3.33398 10.4533 1.33398 8.01327 1.33398Z"
        stroke="#6922D1"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M10.22 12.5467C10.22 13.7667 9.22003 14.7667 8.00003 14.7667C7.39336 14.7667 6.83336 14.5133 6.43336 14.1133C6.03336 13.7133 5.78003 13.1533 5.78003 12.5467"
        stroke="#6922D1"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

const FilledMessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clip-path="url(#clip0_739_3301)">
      <path
        d="M5.66683 12.6673H5.3335C2.66683 12.6673 1.3335 12.0007 1.3335 8.66732V5.33398C1.3335 2.66732 2.66683 1.33398 5.3335 1.33398H10.6668C13.3335 1.33398 14.6668 2.66732 14.6668 5.33398V8.66732C14.6668 11.334 13.3335 12.6673 10.6668 12.6673H10.3335C10.1268 12.6673 9.92683 12.7673 9.80016 12.934L8.80016 14.2673C8.36016 14.854 7.64016 14.854 7.20016 14.2673L6.20016 12.934C6.0935 12.7873 5.84683 12.6673 5.66683 12.6673Z"
        stroke="#6922D1"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.6665 5.33398H11.3332M4.6665 8.66732H8.6665"
        stroke="#6922D1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_739_3301">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g opacity="0.6">
      <path
        d="M9.58317 17.4994C13.9554 17.4994 17.4998 13.9549 17.4998 9.58268C17.4998 5.21043 13.9554 1.66602 9.58317 1.66602C5.21092 1.66602 1.6665 5.21043 1.6665 9.58268C1.6665 13.9549 5.21092 17.4994 9.58317 17.4994Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3332 18.3327L16.6665 16.666"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
export { FilledBellIcon, FilledMessageIcon, SearchIcon };
