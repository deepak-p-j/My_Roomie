import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 361 377"
    width="100" // Adjust this value as needed
    height="75" // Adjust this value as needed
    {...props}
  >
    <path
      fill="#F33636"
      d="M362 139v239H1V1h361v138M199.612 241.953c16.427 6.316 33.559 8.826 50.969 7.555 16.978-1.24 31.306-8.281 41.301-22.842 8.856-12.9 7.633-28.962-3.729-38.935-5.627-4.94-12.427-7.28-19.898-4.395-7.526 2.906-12.347 8.299-13.31 16.568-.96 8.242 2.825 12.698 11.021 13.196 1.206.074 2.407.237 4.42.441-6.961 8.23-15.6 10.913-24.9 11.12-27.593.616-53.604-17.763-60.257-44.825-5.34-21.72-9.529-44.043-11-66.312-1.784-27.012-.27-54.248.075-81.384.048-3.8-.427-5.37-4.657-5.313-15.493.212-30.993.163-46.488.023-3.492-.032-5.21.712-5.066 4.665.48 13.14-2.188 25.82-6.268 38.23-1.402 4.261-3.096 8.427-4.656 12.637l-1.548-.273c-7.438-17.499-8.684-35.993-7.43-55.176-19.023 0-37.322-.064-55.617.175-.998.013-2.794 2.543-2.805 3.913-.063 7.49.504 14.984.51 22.476.03 29.7-1.596 59.245-8.537 88.287-2.109 8.822-3.839 17.734-5.888 27.286 14.334 0 27.96.069 41.58-.172.821-.014 2.246-2.479 2.29-3.838.243-7.658-.296-15.36.278-22.982.814-10.805 2.363-21.554 3.598-32.327l2.165-.095c7.123 19.033 11.104 38.84 12.82 59.117h34.407c.843-17.314 2.194-34.31 9.088-50.26.732 1.343.855 2.615.976 3.888 1.559 16.393 2.823 32.773 7.63 48.725 9.568 31.76 26.544 57.16 58.926 70.827m8.546-204.578c11.048 21.407 22.59 42.577 32.974 64.302 7.175 15.014 9.231 31.142 5.429 47.73-1.396 6.09-2.18 12.319-3.334 19.016h51.393c-1.683-4.78-3.607-8.869-4.55-13.172-3.143-14.343-1.459-28.488 2.87-42.338 8.497-27.197 22.202-51.882 37.034-76.008 1.853-3.014 3.583-6.103 5.585-9.526h-56.71c4.732 19.023 1.503 36.038-9.695 51.57-9.514-16.251-7.42-33.947-7.12-51.696h-59.933c2.211 3.63 3.984 6.54 6.057 10.122M46.843 305.626c4.146 7.19 7.871 14.667 12.538 21.5 6.516 9.542 14.402 17.884 25.13 22.927 12.714 5.977 27.237 4.034 35.712-4.59 3.18-3.234 4.542-6.963 3.491-11.353-.937-3.917-3.478-6.605-7.588-6.825-3.64-.195-6.766 1.048-8.37 4.927-1.806 4.368.993 6.32 4.336 8.342-8.238 4.408-15.708 2.956-22.204-2.259-14.235-11.427-23.621-26.254-29.247-43.485 7.312-4.647 9.14-7.074 9.354-12.199.333-7.96-4.295-15.116-12.612-16.003-10.291-1.096-20.788-.262-31.462-.262 4.036 18.191 1.417 36.352.007 54.525h20.177l-3.117-18.593 1.267-.546c.74 1.076 1.48 2.152 2.588 3.894m148.248-12.265-4.663 27.38h17.997v-22.213l1.88-.167 4.063 22.434h10.95l4.486-23.161 1.848.11 1.167 23.132h18.148c-6.136-18.148-5.593-36.49-3.925-54.794H225.56l-3.677 21.331-2.105-.087-5.158-21.179H193.62c.528 9.035 1.031 17.642 1.47 27.214M93.97 320.938c9.055 2.78 17.13 1.36 23.637-5.865 12.426-13.795 8.4-36.045-4.8-46.834-5.717-4.674-12.619-5.887-19.058-1.737-9.817 6.327-15.485 15.605-15.474 27.457.012 11.468 3.923 21.195 15.695 26.979m56.566-54.064c-12.433 8.422-18.034 23.454-13.504 37.575 2.901 9.046 8.481 16.017 18.492 17.516 10.153 1.52 17.74-2.837 22.861-11.626 7.364-12.64 3.95-32.172-7.372-41.41-6.03-4.92-12.634-6.471-20.477-2.055m147.496-1.37c-2.406-.253-3.333.673-2.787 3.154.678 3.079 1.627 6.2 1.64 9.306.06 14.22-.166 28.442-.291 42.932h39.019l-2.688-17.329c-7.4 5.53-14.606 6.103-17.763 1.343-2.438-3.675-1.49-6.832 2.231-9.247.52.4 1.037.616 1.273 1.003 1.947 3.19 5.025 4.484 8.053 2.72 1.929-1.124 3.737-3.996 3.92-6.223.291-3.52-2.435-5.995-5.932-6.158-4.07-.189-8.178.473-12.336.77.926-4.447 2.847-8.974 7.927-11.085 5.975-2.482 9.684 1.709 13.673 5.905l2.05-17.096c-12.807 0-24.945 0-37.989.005m-17.183 22.988 3.114-22.665h-19.46V320.9h16.243c0-10.688 0-21.093.103-32.41z"
    />
    <path
      fill="#D8E8EF"
      d="M199.241 241.845c-32.011-13.558-48.987-38.958-58.556-70.72-4.806-15.951-6.07-32.33-7.629-48.724-.12-1.273-.244-2.545-.976-3.887-6.894 15.95-8.245 32.945-9.088 50.26H88.584c-1.715-20.278-5.696-40.085-12.82-59.118l-2.164.095c-1.235 10.773-2.784 21.522-3.598 32.327-.574 7.623-.035 15.324-.278 22.982-.044 1.36-1.469 3.824-2.29 3.838-13.62.24-27.246.172-41.58.172 2.05-9.552 3.78-18.464 5.888-27.286 6.941-29.042 8.566-58.586 8.538-88.287-.007-7.492-.574-14.986-.511-22.476.011-1.37 1.807-3.9 2.805-3.913 18.295-.239 36.594-.175 55.617-.175-1.254 19.183-.008 37.677 7.43 55.176l1.548.273c1.56-4.21 3.254-8.376 4.656-12.638 4.08-12.409 6.749-25.09 6.268-38.23-.144-3.952 1.574-4.696 5.066-4.664 15.495.14 30.995.19 46.488-.023 4.23-.058 4.705 1.513 4.657 5.313-.346 27.136-1.86 54.372-.075 81.384 1.471 22.269 5.66 44.592 11 66.312 6.653 27.062 32.664 45.441 60.257 44.826 9.3-.208 17.939-2.89 24.9-11.121-2.013-.204-3.214-.367-4.42-.44-8.196-.5-11.981-4.955-11.022-13.197.964-8.27 5.785-13.662 13.31-16.568 7.472-2.885 14.272-.545 19.9 4.395 11.361 9.973 12.584 26.035 3.728 38.935-9.995 14.56-24.323 21.602-41.301 22.842-17.41 1.27-34.542-1.239-51.34-7.663z"
    />
    <path
      fill="#D8E8EE"
      d="M208.008 37.039c-1.923-3.246-3.696-6.156-5.907-9.786h59.934c-.3 17.75-2.395 35.445 7.12 51.696 11.197-15.532 14.426-32.547 9.695-51.57h56.71c-2.003 3.423-3.733 6.512-5.586 9.526-14.832 24.126-28.537 48.81-37.035 76.008-4.328 13.85-6.012 27.995-2.869 42.338.943 4.303 2.867 8.392 4.55 13.172h-51.393c1.155-6.697 1.938-12.926 3.334-19.015 3.802-16.59 1.746-32.717-5.43-47.73-10.382-21.726-21.925-42.896-33.123-64.639z"
    />
    <path
      fill="#D8E7EE"
      d="M46.659 305.293a181.554 181.554 0 0 0-2.404-3.561l-1.267.546 3.117 18.593H25.928c1.41-18.173 4.03-36.334-.007-54.525 10.674 0 21.171-.834 31.462.262 8.317.887 12.945 8.042 12.612 16.003-.214 5.125-2.042 7.552-9.354 12.199 5.626 17.231 15.012 32.058 29.247 43.485 6.496 5.215 13.966 6.667 22.204 2.26-3.343-2.022-6.142-3.975-4.336-8.343 1.604-3.88 4.73-5.122 8.37-4.927 4.11.22 6.651 2.908 7.588 6.825 1.05 4.39-.312 8.119-3.491 11.354-8.475 8.623-22.998 10.566-35.712 4.59-10.728-5.044-18.614-13.386-25.13-22.927-4.667-6.834-8.392-14.311-12.722-21.834m3.322-19.435c.713-1.806 2.554-4.391 1.94-5.28-2.487-3.6-6.443-2.85-10.597-2.355l.764 8.985c2.736-.394 4.957-.715 7.893-1.35zM195.123 292.879c-.471-9.09-.974-17.697-1.502-26.732h20.999l5.158 21.18 2.105.086 3.677-21.331h21.482c-1.668 18.304-2.211 36.646 3.925 54.794h-18.148l-1.167-23.133-1.848-.109-4.486 23.161h-10.95l-4.062-22.434-1.881.167v22.213h-17.997c1.557-9.145 3.11-18.262 4.695-27.862z"
    />
    <path
      fill="#D8E7EE"
      d="M93.594 320.81c-11.395-5.656-15.306-15.383-15.318-26.85-.011-11.853 5.657-21.131 15.474-27.458 6.44-4.15 13.341-2.937 19.059 1.737 13.199 10.789 17.225 33.039 4.799 46.834-6.508 7.225-14.582 8.646-24.014 5.737m1.274-20.55c1.318 3.495 2.696 7.178 7.265 7.021 4.824-.165 5.952-4.257 7.033-7.891 1.743-5.861.811-11.561-2.084-16.866-2.692-4.932-7.064-5.058-10.052-.318-3.374 5.352-3.86 11.188-2.162 18.055zM150.85 266.664c7.53-4.206 14.135-2.654 20.164 2.266 11.321 9.237 14.736 28.769 7.372 41.409-5.12 8.789-12.708 13.146-22.86 11.626-10.012-1.5-15.592-8.47-18.493-17.516-4.53-14.121 1.07-29.153 13.817-37.785m13.856 16.276c-4.138-5.747-7.779-5.61-11.03.575-3.295 6.269-3.596 12.832-.3 19.086 1.07 2.03 3.768 4.375 5.762 4.412 1.988.037 4.801-2.211 5.901-4.203 3.435-6.22 2.755-12.755-.333-19.87zM298.486 265.501c12.59-.002 24.73-.002 37.537-.002l-2.05 17.096c-3.99-4.196-7.7-8.387-13.674-5.905-5.08 2.111-7.001 6.638-7.927 11.085 4.158-.297 8.267-.959 12.336-.77 3.497.163 6.223 2.638 5.932 6.158-.183 2.227-1.991 5.099-3.92 6.223-3.028 1.764-6.106.47-8.053-2.72-.236-.387-.752-.604-1.273-1.003-3.721 2.415-4.67 5.572-2.231 9.247 3.157 4.76 10.362 4.186 17.763-1.343l2.688 17.329h-39.02c.126-14.49.352-28.712.292-42.932-.013-3.106-.962-6.227-1.64-9.306-.546-2.481.381-3.407 3.24-3.157z"
    />
    <path
      fill="#D8E6ED"
      d="M280.798 288.947c-.051 10.86-.051 21.266-.051 31.954h-16.243v-55.074h19.46c-1.049 7.63-2.082 15.147-3.166 23.12z"
    />
    <path
      fill="#F14142"
      d="M49.623 286.015c-2.578.478-4.799.799-7.535 1.193l-.764-8.985c4.154-.494 8.11-1.245 10.597 2.355.614.889-1.227 3.474-2.298 5.437z"
    />
    <path
      fill="#F23A3A"
      d="M94.75 299.86c-1.58-6.466-1.094-12.302 2.28-17.654 2.988-4.74 7.36-4.614 10.052.318 2.895 5.305 3.827 11.005 2.084 16.866-1.081 3.634-2.21 7.726-7.033 7.891-4.569.157-5.947-3.526-7.384-7.42z"
    />
    <path
      fill="#F2393A"
      d="M164.837 283.312c2.957 6.743 3.637 13.277.202 19.498-1.1 1.992-3.913 4.24-5.901 4.203-1.994-.037-4.692-2.383-5.762-4.412-3.296-6.254-2.995-12.817.3-19.086 3.251-6.185 6.892-6.322 11.161-.203z"
    />
  </svg>
);
export default SvgComponent;
