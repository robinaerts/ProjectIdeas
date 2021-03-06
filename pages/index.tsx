import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import beginner from "../public/beginner.svg";

const Home: NextPage = () => {
  return (
    <div id="home-container">
      <Head>
        <title>Project Ideas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Programming ideas that fit your level"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Choose your skill level</h1>
      <div id="project-level-container">
        <Link href="/beginner">
          <div className="level-container">
            <h2 className="level-text">BEGINNER</h2>
            <svg
              style={{ marginTop: "4rem" }}
              id="undraw_coding_re_iv62"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 406 223.186"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M281.246,614.41c-9.016,6.721-11.571,18.546-11.571,18.546s12.062.928,21.078-5.792,11.571-18.546,11.571-18.546S290.262,607.689,281.246,614.41Z"
                transform="translate(-219.313 -423.707)"
                fill="#f1f1f1"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M283.351,602.592c-4.333,10.377-15.185,15.724-15.185,15.724s-3.827-11.477.506-21.853,15.185-15.724,15.185-15.724S287.684,592.216,283.351,602.592Z"
                transform="translate(-217.662 -408.734)"
                fill="#f1f1f1"
              />
              <path
                id="Path_3"
                data-name="Path 3"
                d="M860.953,527.879h0a89.94,89.94,0,0,1-.755-19.5l.755-10.77h0C856.795,505.887,857.734,516.778,860.953,527.879Z"
                transform="translate(-535.877 -364.018)"
                fill="#cacaca"
              />
              <path
                id="Path_4"
                data-name="Path 4"
                d="M869.649,546.04h0a66.117,66.117,0,0,1-.363-11.606l.363-6.411h0C867.649,532.949,868.1,539.432,869.649,546.04Z"
                transform="translate(-541.33 -380.377)"
                fill="#cacaca"
              />
              <path
                id="Path_5"
                data-name="Path 5"
                d="M866.327,582.912v3.6a1.087,1.087,0,0,1-1.081,1.081h-1.8a.359.359,0,0,0-.36.36V617.5A1.086,1.086,0,0,1,862,618.584h-21.98a1.082,1.082,0,0,1-1.081-1.081V587.956a.361.361,0,0,0-.36-.36H836.42a1.082,1.082,0,0,1-1.081-1.081v-3.6a1.079,1.079,0,0,1,1.081-1.081h28.826A1.084,1.084,0,0,1,866.327,582.912Z"
                transform="translate(-523.593 -409.321)"
                fill="#f2f2f2"
              />
              <rect
                id="Rectangle_9"
                data-name="Rectangle 9"
                width="24.142"
                height="1.081"
                transform="translate(315.382 179.032)"
                fill="#e6e6e6"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M866.86,619.173a31.026,31.026,0,0,1-24.5,0v-7.616a38.479,38.479,0,0,1,24.5,0Z"
                transform="translate(-527.368 -424.234)"
                fill="#e6e6e6"
              />
              <circle
                id="Ellipse_276"
                data-name="Ellipse 276"
                cx="32.654"
                cy="32.654"
                r="32.654"
                transform="translate(171.519 13.19)"
                fill="#feb8b8"
              />
              <path
                id="Path_1461"
                data-name="Path 1461"
                d="M589.963,226.173a37.712,37.712,0,0,0-21.455-16.4L564.5,212.7v-3.8a34.71,34.71,0,0,0-6.484-.378l-3.459,3.129v-2.869a37.352,37.352,0,0,0-25.767,15.327c-7.511,10.828-8.779,25.891-1.391,36.806,2.028-6.232,4.489-12.08,6.517-18.311a18.447,18.447,0,0,0,4.805.023l2.467-5.757.689,5.513c7.647-.666,18.99-2.129,26.239-3.469l-.705-4.23,4.218,3.515c2.221-.511,3.54-.975,3.431-1.329,5.392,8.692,11.99,14.244,17.382,22.936C594.49,247.549,596.846,237.358,589.963,226.173Z"
                transform="translate(-355.291 -208.5)"
                fill="#2f2e41"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M595.212,435.923c-1.123-6.755-2.281-13.64-5.421-19.726-2.063-3.986-5.339-7.784-9.754-8.573a9.436,9.436,0,0,1-2.54-.588c-1.294-.623-18.68-10.548-21.443-12.277-2.373-1.484-6.118-4.232-8.007-4.232-1.9-.042-9.185,1.654-37.62-.569a102.7,102.7,0,0,0-13.856,6.812c-.092-.06-29.513,15.739-30.618,15.7a6.429,6.429,0,0,0-5.239,2.94,19.017,19.017,0,0,0-2.352,5.8c6.426,14.311,12.306,28.64,18.732,42.95a3.665,3.665,0,0,1,.465,1.763,4.3,4.3,0,0,1-.8,1.763c-3.152,5.063-3.051,11.43-2.707,17.38s.771,12.235-1.889,17.568c-.723,1.464-1.664,2.8-2.352,4.269-1.611,3.316-2.193,13.923-1.252,17.486l117.887,3.377C583.913,520.794,595.212,435.923,595.212,435.923Z"
                transform="translate(-320.811 -306.11)"
                fill="#6c63ff"
              />
              <path
                id="Path_1421"
                data-name="Path 1421"
                d="M436.082,542.585a20.813,20.813,0,0,0-.07,5.133l1.69,24.265c.159,2.287.315,4.568.529,6.85.405,4.427,1.011,8.82,1.763,13.205a2.352,2.352,0,0,0,2.41,2.287c7.438,1.574,15.122,1.511,22.713,1.082,11.583-.646,41.217-1.87,43.027-4.221s.755-6.156-1.605-8.058-41.467-6.538-41.467-6.538a38.536,38.536,0,0,1,2.628-8.755c1.964-5.1,3.8-10.366,3.834-15.828s-2.023-11.205-6.5-14.335c-3.681-2.569-8.42-3.046-12.905-2.94-3.263.094-8.9-.688-11.883.588C437.89,536.36,436.523,540.276,436.082,542.585Z"
                transform="translate(-308.72 -383.905)"
                fill="#fbbebe"
              />
              <path
                id="Path_1430"
                data-name="Path 1430"
                d="M444.116,454.159a6.086,6.086,0,0,0-1.3,2.087,98.694,98.694,0,0,0-8.29,33.878,3.387,3.387,0,0,1-.382,1.641,7.183,7.183,0,0,1-.864.935,3.246,3.246,0,0,0,.388,4.574q.08.068.165.13c.97-1.826,3.292-2.422,5.357-2.581,9.883-.782,19.538,3.816,29.451,3.469-.7-2.417-1.705-4.739-2.276-7.185-2.522-10.86,3.769-22.683-.088-33.143a8.548,8.548,0,0,0-4.086-5.068,10.884,10.884,0,0,0-2.616-.692c-2.5-.453-7.491-2.387-9.913-1.611-.894.288-1.246,1.129-1.987,1.637C446.542,452.948,445.049,453.212,444.116,454.159Z"
                transform="translate(-306.904 -338.628)"
                fill="#6c63ff"
              />
              <path
                id="Path_1421-2"
                data-name="Path 1421"
                d="M674.57,535.321c-2.981-1.276-8.619-.494-11.883-.588-4.485-.106-9.224.371-12.905,2.94-4.475,3.129-6.532,8.872-6.5,14.335s1.87,10.729,3.834,15.828a38.536,38.536,0,0,1,2.628,8.755s-39.106,4.636-41.467,6.538-3.416,5.706-1.605,8.058,58.3,4.713,65.74,3.139a2.352,2.352,0,0,0,2.41-2.287c.752-4.386,1.357-8.778,1.763-13.205.215-2.281.371-4.563.529-6.85l1.69-24.265a20.819,20.819,0,0,0-.07-5.133C678.3,540.276,676.929,536.36,674.57,535.321Z"
                transform="translate(-400.098 -383.905)"
                fill="#fbbebe"
              />
              <path
                id="Path_1430-2"
                data-name="Path 1430"
                d="M710.28,452.229c-.741-.508-1.093-1.348-1.987-1.637-2.422-.776-7.408,1.158-9.913,1.611a10.882,10.882,0,0,0-2.616.692,8.548,8.548,0,0,0-4.086,5.068c-3.857,10.46,2.434,22.284-.088,33.143-.57,2.446-1.576,4.768-2.276,7.185,9.913.347,19.567-4.251,29.451-3.469,2.064.159,4.386.755,5.357,2.581q.084-.062.164-.13a3.246,3.246,0,0,0,.388-4.574,7.179,7.179,0,0,1-.864-.935,3.387,3.387,0,0,1-.382-1.641,98.7,98.7,0,0,0-8.29-33.878,6.087,6.087,0,0,0-1.3-2.087C712.9,453.213,711.405,452.948,710.28,452.229Z"
                transform="translate(-445.043 -338.628)"
                fill="#6c63ff"
              />
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="8.813"
                cy="8.813"
                r="8.813"
                transform="translate(185.689 193.953)"
                fill="#fbbebe"
              />
              <circle
                id="Ellipse_2"
                data-name="Ellipse 2"
                cx="8.813"
                cy="8.813"
                r="8.813"
                transform="translate(205.203 193.953)"
                fill="#fbbebe"
              />
              <path
                id="Path_8"
                data-name="Path 8"
                d="M594.414,592.364H473.335A5.338,5.338,0,0,1,468,587.032V513.576a5.338,5.338,0,0,1,5.332-5.332h121.08a5.338,5.338,0,0,1,5.332,5.332v73.456A5.338,5.338,0,0,1,594.414,592.364Z"
                transform="translate(-325.996 -369.738)"
                fill="#3f3d56"
              />
              <circle
                id="Ellipse_263"
                data-name="Ellipse 263"
                cx="3.528"
                cy="3.528"
                r="3.528"
                transform="translate(204.057 177.039)"
                fill="#fff"
              />
              <path
                id="Path_9"
                data-name="Path 9"
                d="M406,449.724H0V462.2H24.014v2.9h357.98v-2.9H406Z"
                transform="translate(0 -241.914)"
                fill="#f1f1f1"
              />
              <path
                id="Path_10"
                data-name="Path 10"
                d="M526.5,304.155h0c-5.247,0-9.5-4.6-9.5-10.272h0v-5.136c0-5.673,4.253-10.272,9.5-10.272h0v25.68Z"
                transform="translate(-352.351 -246.141)"
                fill="#6c63ff"
              />
              <path
                id="Path_11"
                data-name="Path 11"
                d="M668.779,278.476h0c5.247,0,9.5,4.6,9.5,10.272v5.136c0,5.673-4.253,10.272-9.5,10.272h0Z"
                transform="translate(-433.997 -246.141)"
                fill="#6c63ff"
              />
              <path
                id="Path_12"
                data-name="Path 12"
                d="M595.328,256.919h-1.507c0-20.669-15.552-37.484-34.668-37.484s-34.668,16.816-34.668,37.484h-1.507c0-21.568,16.228-39.114,36.176-39.114S595.328,235.351,595.328,256.919Z"
                transform="translate(-355.568 -213.505)"
                fill="#6c63ff"
              />
            </svg>
          </div>
        </Link>
        <Link href="/intermediate">
          <div className="level-container">
            <h2 className="level-text">INTERMEDIATE</h2>
            <svg
              style={{ marginTop: "2rem" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 406 311.638"
            >
              <g id="undraw_programming_re_kg9v" transform="translate(0 0)">
                <ellipse
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="14.159"
                  cy="14.541"
                  rx="14.159"
                  ry="14.541"
                  transform="translate(222.267 25.857)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M569.392,449.512c20.382-16.462,30.118-44.125,24.023-70.513q-.227-.984-.479-1.963c-4.041-15.664-14.037-30.551-28.606-35.556-12.233-4.2-25.586-.971-38.348-2.642-25.053-3.281-44.476-24.775-58.142-47.28s-24.17-47.7-42.329-66.288c-29.933-30.646-78.762-37.244-115.876-17.3S248.88,272.18,249.889,316.288s25.7,86.278,61.564,108.652c13.174,8.219,28.411,14.042,43.576,12,13.158-1.768,25.113-9.265,38.209-11.49,20.59-3.5,41.048,6.372,58.857,17.875s35.01,25.138,55.247,30.47C526.991,478.978,551.335,464.095,569.392,449.512Z"
                  transform="translate(-226.913 -178.775)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M599.871,194c-.439-.316-.883-.615-1.322-.92a186.324,186.324,0,0,0-40.534-21.2l-3.3,49.132H533.788V164.7c-1.317-.294-2.645-.572-3.972-.833v57.137H504.948c-28.508,0-51.617-24.935-51.618-55.694h0c-1.332.31-2.655.643-3.977,1v54.7H429.1l-3.144-46.85A187.955,187.955,0,0,0,384.6,197.863c-.222.163-.444.332-.661.5-1.115.844-2.216,1.7-3.311,2.576V388.373h59.693l-1.055-15.766-5.8-86.56H550.348l-5.8,86.56-1.055,15.766H602.52V195.892Q601.2,194.928,599.871,194ZM449.354,271.752H432.5L429.387,225.3h19.967Zm80.462,0h-28.3v-.92a3.5,3.5,0,0,0-.915-2.382,3.007,3.007,0,0,0-2.209-.984h-12.3a3.248,3.248,0,0,0-3.119,3.365v.92H453.331V225.3h76.485Zm3.972,0V225.3h20.638l-3.114,46.452Z"
                  transform="translate(-288.337 -163.871)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M206.59,598.162a153.9,153.9,0,0,0,14.51,15.766l376.98.545a153.886,153.886,0,0,0,14.51-15.765Z"
                  transform="translate(-206.59 -361.657)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M702.02,503.588v46.672A2.216,2.216,0,0,0,704.2,552.5h67.349a2.216,2.216,0,0,0,2.184-2.243V503.588a2.217,2.217,0,0,0-2.184-2.241H704.2a2.217,2.217,0,0,0-2.184,2.241Z"
                  transform="translate(-447.847 -317.566)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M705,505.524V551.04a1.185,1.185,0,0,0,1.167,1.2h66.225a1.185,1.185,0,0,0,1.167-1.2V505.524a1.186,1.186,0,0,0-1.167-1.2H706.167a1.186,1.186,0,0,0-1.168,1.2Z"
                  transform="translate(-449.22 -318.921)"
                  fill="#6c63ff"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M699.1,601.46a1.3,1.3,0,0,0,1.031.506h72.115a1.314,1.314,0,0,0,1.029-.5,1.39,1.39,0,0,0,.268-1.138l-1.119-5.461a1.356,1.356,0,0,0-.826-.99,1.256,1.256,0,0,0-.471-.091h-69.88a1.256,1.256,0,0,0-.471.091,1.355,1.355,0,0,0-.826.99l-1.12,5.461A1.389,1.389,0,0,0,699.1,601.46Z"
                  transform="translate(-446.355 -359.663)"
                  fill="#2f2e41"
                />
                <rect
                  id="Rectangle_10"
                  data-name="Rectangle 10"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(323.871 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_11"
                  data-name="Rectangle 11"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(319.549 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_12"
                  data-name="Rectangle 12"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(315.227 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_13"
                  data-name="Rectangle 13"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(310.905 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_14"
                  data-name="Rectangle 14"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(306.583 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_15"
                  data-name="Rectangle 15"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(302.262 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_16"
                  data-name="Rectangle 16"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(297.94 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_17"
                  data-name="Rectangle 17"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(293.618 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_18"
                  data-name="Rectangle 18"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(289.296 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_19"
                  data-name="Rectangle 19"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(284.974 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_20"
                  data-name="Rectangle 20"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(280.652 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_21"
                  data-name="Rectangle 21"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(276.33 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_22"
                  data-name="Rectangle 22"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(272.008 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_23"
                  data-name="Rectangle 23"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(267.687 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_24"
                  data-name="Rectangle 24"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(263.365 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_25"
                  data-name="Rectangle 25"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(259.043 236.472) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_26"
                  data-name="Rectangle 26"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(323.922 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_27"
                  data-name="Rectangle 27"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(319.6 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_28"
                  data-name="Rectangle 28"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(315.278 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_29"
                  data-name="Rectangle 29"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(310.956 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_30"
                  data-name="Rectangle 30"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(306.635 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_31"
                  data-name="Rectangle 31"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(302.313 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_32"
                  data-name="Rectangle 32"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(297.991 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_33"
                  data-name="Rectangle 33"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(293.669 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_34"
                  data-name="Rectangle 34"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(289.347 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_35"
                  data-name="Rectangle 35"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(285.025 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_36"
                  data-name="Rectangle 36"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(280.703 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_37"
                  data-name="Rectangle 37"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(276.381 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_38"
                  data-name="Rectangle 38"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(272.059 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_39"
                  data-name="Rectangle 39"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(267.738 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_40"
                  data-name="Rectangle 40"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(263.416 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_41"
                  data-name="Rectangle 41"
                  width="2.221"
                  height="1.369"
                  rx="0.488"
                  transform="translate(259.094 238.753) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_42"
                  data-name="Rectangle 42"
                  width="17.769"
                  height="1.369"
                  rx="0.488"
                  transform="translate(303.288 241.49) rotate(180)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_43"
                  data-name="Rectangle 43"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(266.01 195.36)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_44"
                  data-name="Rectangle 44"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(282.788 195.36)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_45"
                  data-name="Rectangle 45"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(287.542 195.36)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_46"
                  data-name="Rectangle 46"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(270.427 195.218)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_47"
                  data-name="Rectangle 47"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(292.786 195.218)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_48"
                  data-name="Rectangle 48"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(270.484 199.197)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_49"
                  data-name="Rectangle 49"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(287.263 199.197)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_50"
                  data-name="Rectangle 50"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(292.017 199.197)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_51"
                  data-name="Rectangle 51"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(274.899 199.055)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_52"
                  data-name="Rectangle 52"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(297.258 199.055)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_53"
                  data-name="Rectangle 53"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(274.959 203.034)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_54"
                  data-name="Rectangle 54"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(291.737 203.034)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_55"
                  data-name="Rectangle 55"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(296.491 203.034)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_56"
                  data-name="Rectangle 56"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(279.371 202.893)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_57"
                  data-name="Rectangle 57"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(301.73 202.893)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_58"
                  data-name="Rectangle 58"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(279.432 206.872)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_59"
                  data-name="Rectangle 59"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(296.211 206.872)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_60"
                  data-name="Rectangle 60"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(300.965 206.872)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_61"
                  data-name="Rectangle 61"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(283.843 206.731)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_62"
                  data-name="Rectangle 62"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(282.788 222.132)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_63"
                  data-name="Rectangle 63"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(287.542 222.132)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_64"
                  data-name="Rectangle 64"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(292.786 222.273)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_65"
                  data-name="Rectangle 65"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(266.01 222.132)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_66"
                  data-name="Rectangle 66"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(270.427 222.273)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_67"
                  data-name="Rectangle 67"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(270.484 218.294)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_68"
                  data-name="Rectangle 68"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(287.263 218.294)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_69"
                  data-name="Rectangle 69"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(292.017 218.294)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_70"
                  data-name="Rectangle 70"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(274.899 218.436)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_71"
                  data-name="Rectangle 71"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(274.959 214.456)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_72"
                  data-name="Rectangle 72"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(291.737 214.456)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_73"
                  data-name="Rectangle 73"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(296.491 214.456)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_74"
                  data-name="Rectangle 74"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(279.371 214.598)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_75"
                  data-name="Rectangle 75"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(279.432 210.619)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_76"
                  data-name="Rectangle 76"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(296.211 210.619)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_77"
                  data-name="Rectangle 77"
                  width="3.164"
                  height="1.7"
                  rx="0.85"
                  transform="translate(300.965 210.619)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_78"
                  data-name="Rectangle 78"
                  width="11.028"
                  height="1.7"
                  rx="0.85"
                  transform="translate(283.843 210.761)"
                  fill="#fff"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M705.237,617.925l-7.079-11.491,22.22-18.19,9.171-10.435a10,10,0,0,1,9.637-3.219,10.26,10.26,0,0,1,7.554,6.937h0a10.51,10.51,0,0,1-6.135,13.065l-14.5,5.487Z"
                  transform="translate(-445.445 -350.82)"
                  fill="#ffb6b6"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M398.28,499.776v55.852h38.1V499.776a1.873,1.873,0,0,0-1.289-1.8,1.644,1.644,0,0,0-.546-.087H400.12A1.862,1.862,0,0,0,398.28,499.776Zm14.869,19.191a4.069,4.069,0,1,1,8.135,0v6.481a4.069,4.069,0,1,1-8.135,0Z"
                  transform="translate(-299.643 -315.992)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M398.06,600.632v5.386a1.046,1.046,0,0,0,1.023,1.056h36.288a1.043,1.043,0,0,0,1.024-1.056v-5.386Z"
                  transform="translate(-299.538 -362.782)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M285.25,342.738V444.715a4.842,4.842,0,0,0,4.773,4.9H437.178a4.842,4.842,0,0,0,4.773-4.9V342.738a4.844,4.844,0,0,0-4.773-4.9H290.023a4.844,4.844,0,0,0-4.773,4.9Z"
                  transform="translate(-243.538 -243.102)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_23"
                  data-name="Path 23"
                  d="M291.76,346.967v99.451a2.59,2.59,0,0,0,2.551,2.619h144.7a2.59,2.59,0,0,0,2.551-2.619V346.967a2.591,2.591,0,0,0-2.55-2.625h-144.7A2.592,2.592,0,0,0,291.76,346.967Z"
                  transform="translate(-246.595 -246.062)"
                  fill="#fff"
                />
                <path
                  id="Path_24"
                  data-name="Path 24"
                  d="M342.085,604.127a1.548,1.548,0,0,0,1.23.6H429.4a1.569,1.569,0,0,0,1.228-.6,1.66,1.66,0,0,0,.32-1.359l-1.336-6.519a1.618,1.618,0,0,0-.986-1.182,1.5,1.5,0,0,0-.562-.109h-83.42a1.5,1.5,0,0,0-.562.109,1.618,1.618,0,0,0-.986,1.182l-1.336,6.519A1.658,1.658,0,0,0,342.085,604.127Z"
                  transform="translate(-272.522 -360.2)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M440.179,368.574h-135.4a.553.553,0,0,1,0-1.106h135.4a.553.553,0,0,1,0,1.106Z"
                  transform="translate(-252.46 -256.594)"
                  fill="#3f3d56"
                />
                <ellipse
                  id="Ellipse_4"
                  data-name="Ellipse 4"
                  cx="3.155"
                  cy="3.313"
                  rx="3.155"
                  ry="3.313"
                  transform="translate(58.385 101.426)"
                  fill="#3f3d56"
                />
                <ellipse
                  id="Ellipse_5"
                  data-name="Ellipse 5"
                  cx="3.155"
                  cy="3.313"
                  rx="3.155"
                  ry="3.313"
                  transform="translate(69.286 101.426)"
                  fill="#3f3d56"
                />
                <ellipse
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx="3.155"
                  cy="3.313"
                  rx="3.155"
                  ry="3.313"
                  transform="translate(77.993 101.426)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M540.841,351.622H533.1a.6.6,0,0,0,0,1.2h7.742a.6.6,0,0,0,0-1.2Z"
                  transform="translate(-364.444 -249.377)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_27"
                  data-name="Path 27"
                  d="M540.829,355.772h-7.742a.6.6,0,0,0,0,1.2h7.742a.6.6,0,0,0,0-1.2Z"
                  transform="translate(-364.432 -251.267)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_28"
                  data-name="Path 28"
                  d="M540.841,359.922H533.1a.6.6,0,0,0,0,1.2h7.742a.6.6,0,0,0,0-1.2Z"
                  transform="translate(-364.444 -253.157)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_29"
                  data-name="Path 29"
                  d="M896.707,576.98a3.409,3.409,0,0,0,3.279,2.359l14.048-.371a3.373,3.373,0,0,0,3.171-2.536l1.988-21.831a5.076,5.076,0,0,0,2.247.474,5.263,5.263,0,0,0-.257-10.519,4.225,4.225,0,0,0-.921.1,3.43,3.43,0,0,0-2.585-1.145l-21.61.573a3.023,3.023,0,0,0-.533.068,3.378,3.378,0,0,0-2.289,1.647,3.549,3.549,0,0,0-.3,2.854ZM919.6,553.118l1.415-5.2a3.636,3.636,0,0,0,.011-1.838c.069,0,.129-.034.2-.034a3.765,3.765,0,0,1,.172,7.524,3.378,3.378,0,0,1-1.8-.45Z"
                  transform="translate(-540.143 -336.767)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_30"
                  data-name="Path 30"
                  d="M897.978,544.149c.46,2.7,5.637,4.6,11.86,4.273,5.723-.271,10.4-2.335,11.26-4.781a3.115,3.115,0,0,0-.978-.134l-21.609.573A3.029,3.029,0,0,0,897.978,544.149Z"
                  transform="translate(-542.585 -336.766)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_31"
                  data-name="Path 31"
                  d="M922.1,579a.259.259,0,0,0,.08-.036l3.051-2.051a.276.276,0,0,0,0-.455l-3.171-2.133a.261.261,0,0,0-.367.078.277.277,0,0,0,.076.377l2.832,1.905-2.712,1.823a.276.276,0,0,0-.1.337A.263.263,0,0,0,922.1,579Z"
                  transform="translate(-553.701 -350.78)"
                  fill="#6c63ff"
                />
                <path
                  id="Path_32"
                  data-name="Path 32"
                  d="M910.313,579.416a.27.27,0,0,0,.2-.227.275.275,0,0,0-.131-.273l-2.812-1.656,2.718-2.073a.277.277,0,0,0,.055-.381.26.26,0,0,0-.371-.056l-3.043,2.321a.276.276,0,0,0,.026.455l3.163,1.862A.259.259,0,0,0,910.313,579.416Z"
                  transform="translate(-546.738 -350.971)"
                  fill="#6c63ff"
                />
                <path
                  id="Path_33"
                  data-name="Path 33"
                  d="M917.8,579.689a.252.252,0,0,0,.073-.032.272.272,0,0,0,.12-.168.278.278,0,0,0-.031-.206l-4.325-7.3a.261.261,0,0,0-.365-.091.277.277,0,0,0-.089.374l4.325,7.3A.262.262,0,0,0,917.8,579.689Z"
                  transform="translate(-549.708 -349.675)"
                  fill="#6c63ff"
                />
                <rect
                  id="Rectangle_79"
                  data-name="Rectangle 79"
                  width="26.896"
                  height="5.906"
                  rx="2.953"
                  transform="translate(107.837 142.04)"
                  fill="#6c63ff"
                />
                <rect
                  id="Rectangle_80"
                  data-name="Rectangle 80"
                  width="54.215"
                  height="5.906"
                  rx="2.953"
                  transform="translate(94.359 153.853)"
                  fill="#e6e6e6"
                />
                <rect
                  id="Rectangle_81"
                  data-name="Rectangle 81"
                  width="54.215"
                  height="5.906"
                  rx="2.953"
                  transform="translate(94.359 165.666)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_34"
                  data-name="Path 34"
                  d="M497.3,515.416l.115.373.006.012,3.46,10.8,3.98,12.45,7.489,23.4.073,3.634v.012l.557,29.235-1.543,3.963,1.736,6.5s-.8-9.823-5.081-4.182c-2.426,3.206-5.263,6.486-7.592,9.561q5.091,2.115,10.344,3.827c.756.249,1.518.485,2.281.721l.49.149a138.115,138.115,0,0,0,35.715,5.9c.629.019,1.246.031,1.845.043.212.006.417.012.623.012.678.006,1.349.012,2.027.012q2.051,0,4.083-.062a138.016,138.016,0,0,0,29.745-4.131c-.067-4.131-.248-8.958-.508-14.114-.121-2.528-2.837-5.268-3-7.915-.115-1.988,2.323-3.858,2.2-5.877-.823-12.431-1.851-7.659-2.613-16.462q-.118-1.3-.218-2.479c-.49-5.653-.829-9.188-.829-9.188l3.255-21.066,5.112-33.075-.393-.665-.442-.224-26.962-13.7-1.464-3.852a5.827,5.827,0,0,0-5.378-3.783l-17.761-.075a5.749,5.749,0,0,0-4.725,2.466l-4.809,6.84Z"
                  transform="translate(-348.498 -310.194)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_35"
                  data-name="Path 35"
                  d="M500,574.97l-4.023,8.84-2.746,6.038-4.725,25.4-2.365,2.578-2.026-9.127-21.21,4.836c-.7-3.97-.186.134-.616-4.221.121-.124.248-.248.375-.373.339-.323.623-.627.617-.919-.242-15.021.484-40.585,6.545-56.073a33,33,0,0,1,3.726-7.138c.121-.168.236-.335.351-.5,2.795-4.019,4.561-7.977,7.066-10.791v-.006a.29.29,0,0,0,.042-.044.083.083,0,0,0,.024-.019l17.2-9.368.738,21.3.526,15.307Z"
                  transform="translate(-330.712 -327.921)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_36"
                  data-name="Path 36"
                  d="M650.391,577.662l5.025,11.041,1.754,3.845,4.723,25.4,2.357,2.572,2.031-9.125.954-.2,17.212-3.661,5.017,16.363a9.985,9.985,0,0,0-1.729-12.256c-.343-.318-.628-.628-.62-.921.286-17.668-.767-49.929-10.27-63.207-3.018-4.214-4.829-8.411-7.464-11.343-.008-.008-.008-.017-.016-.017l-6.412-10.781-.391-.662-.44-.226Z"
                  transform="translate(-422.07 -328.102)"
                  fill="#3f3d56"
                />
                <ellipse
                  id="Ellipse_5-2"
                  data-name="Ellipse 5"
                  cx="23.629"
                  cy="24.265"
                  rx="23.629"
                  ry="24.265"
                  transform="translate(175.765 121.246)"
                  fill="#ffb6b6"
                />
                <path
                  id="Path_37"
                  data-name="Path 37"
                  d="M601.386,384.191a1.97,1.97,0,0,0-1.426-.648l.355-1.013a1.962,1.962,0,0,0-.322-1.91,1.844,1.844,0,0,0-1.778-.65l-1.294.256.122-.888a1.951,1.951,0,0,0-.677-1.774,1.835,1.835,0,0,0-1.831-.306,1.951,1.951,0,0,1-1.718-.125,2.091,2.091,0,0,1-1.018-1.421l-.451-2.233-.048-.12c-2.2-3.758-6.417-6.491-11.582-7.493-4.6-.9-9.312-.441-13.856-.011a12.4,12.4,0,0,0-5.536,1.438,5.006,5.006,0,0,0-2.413,4.591c-4.481-1.41-9.285,1.4-11.666,4.956-2.821,4.226-3.282,9.519-3.357,13.658-.2,9.792,1.766,17.8,5.833,23.814.3.436.371,1.345.96,1.65l-.122-.2c.657.338,1.326.882,1.076,1.465-.716,1.677,4.041,5.386,7.392,6.611,6.114,2.238,14.244,2.048,19.96,1.242l.2-1.389c2.063-.289,3.516-.839,3.924-1.7.721-.632,1.336-1.2,1.872-1.721l.005-.005c.011-.011.032-.027.042-.038,2.583-2.543,3.182-3.992,3.452-6.2a18.232,18.232,0,0,0-.673-6.333c9.938,1.579-3.914-10.87,5.345-13.277a2.815,2.815,0,0,1,.323-.082c.271-.065.541-.131.8-.207a13.833,13.833,0,0,0,3.564-1.563c2.588-1.617,3.442-3.763,4.778-6.181A1.905,1.905,0,0,0,601.386,384.191Z"
                  transform="translate(-370.143 -255.629)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_38"
                  data-name="Path 38"
                  d="M612.764,596.035c-.005.953-.016,2.287-.058,3.937q-.008.343-.016.7c-.069,3.033-.138,5.576-.249,8.4-.005.2-.011.387-.021.583-.148,3.943-.382,8.534-.785,15.8-.748,13.429-2.052,1.846-3.362,6.557-.064.234-.133.512-.2.839a15.512,15.512,0,0,1-1,3.447c-.695.425-1.411.833-2.116,1.242-2.01,1.149-4.051,2.255-6.109,3.306-1.156.588-2.317,1.165-3.484,1.721-.186.087-.366.174-.546.256a141.336,141.336,0,0,1-18.428,7.221c-1.23.381-2.455.752-3.7,1.095-1.294.37-2.588.719-3.9,1.046a138.037,138.037,0,0,1-29.744,4.133c-1.352.044-2.715.06-4.083.06-.679,0-1.347-.005-2.026-.011-.207,0-.414-.005-.62-.011-.6-.016-1.22-.027-1.845-.044a138.012,138.012,0,0,1-35.715-5.9l-.493-.147c-.764-.24-1.522-.474-2.28-.724q-5.25-1.707-10.346-3.823-3.89-1.609-7.689-3.453a.176.176,0,0,1-.064-.033c-.53-.251-1.066-.512-1.6-.779-.069-.038-.143-.076-.217-.114q-2.967-1.487-5.87-3.115c-1.628-3.839-3.919-4.574-5.34-7.951a14.379,14.379,0,0,1-.891-3.126c0-.011-.005-.022-.005-.038.148,2.026-.631-3.594-.005-.022-.005-.065-.011-.136-.016-.218-.016-.2-.037-.436-.069-.735-1.819-18.238-1.7-39.1-2.492-56.282q-.08-1.666-.164-3.191c-.016-.338-.037-.67-.058-1,.037-.1.08-.2.127-.3a.545.545,0,0,1,.037-.082.887.887,0,0,1,.053-.1l.037-.054a.5.5,0,0,1,.026-.054c.048-.076.1-.158.159-.234.027-.033.048-.06.074-.087a.434.434,0,0,1,.064-.076.341.341,0,0,1,.058-.071c.021-.022.042-.049.069-.076a.163.163,0,0,1,.042-.044,1.092,1.092,0,0,1,.138-.136,5.126,5.126,0,0,1,.6-.49c.074-.049.154-.1.228-.153a10.037,10.037,0,0,1,1.681-.828c.2-.076.4-.147.62-.223.08-.022.154-.049.233-.076.117-.038.233-.076.355-.1.6-.185,1.257-.343,1.962-.49.085-.016.175-.033.265-.054.127-.027.26-.049.392-.071l.552-.1c1.575-.256,3.362-.447,5.335-.572l.557-.033.658-.033c.186-.011.377-.016.567-.022s.377-.016.573-.022c.536-.016,1.087-.033,1.649-.044,1.6-.033,3.288-.022,5.059.016.822.022,1.66.044,2.519.082.058,0,.111.005.164.005.748.027,1.5.06,2.275.1.541.027,1.087.054,1.633.087.514.033,1.034.065,1.559.1.408.022.817.054,1.23.082.35.027.7.054,1.05.076l.477.033c.26.022.52.038.785.065l1.761.147,1.787.163c.6.054,1.2.114,1.808.174l.18.016c.551.06,1.1.114,1.66.174.127.011.26.022.387.038.531.055,1.072.119,1.608.177l.493.054c.42.047.833.088,1.256.139.557.065,1.124.125,1.676.2.43.049.859.1,1.289.153.673.082,1.358.169,2.042.261.26.033.52.065.78.1,1.951.251,3.924.528,5.929.817,3.039.441,6.125.92,9.232,1.438s6.243,1.064,9.391,1.639c.8.147,1.591.294,2.392.447l1.082.212c.615.114,1.23.234,1.845.354s1.23.24,1.845.365l2.2.441c4.82.98,9.614,2.026,14.291,3.12.769.18,1.538.365,2.3.545q2.291.547,4.539,1.111c.414.1.822.2,1.23.3,1.018.261,2.036.523,3.039.79l.175.049c.737.185,1.458.376,2.18.572q2.553.686,5.022,1.389,1.639.466,3.24.942c1.6.474,3.16.953,4.682,1.438.376.12.753.24,1.124.354,1.114.354,2.211.713,3.277,1.073.848.283,1.676.572,2.492.86s1.617.577,2.4.866c.5.185,1,.381,1.5.566.716.272,1.421.545,2.111.817.212.082.419.169.626.251.133.06.26.109.387.163.249.1.5.2.748.3s.493.2.737.31.483.2.716.3.472.2.705.31c.2.082.387.169.573.256.377.169.753.338,1.119.512.18.087.361.169.541.256l.414.2c.058.033.117.06.175.087l.4.2c.308.147.61.3.907.452.4.207.785.414,1.156.615s.742.414,1.092.615c.058.033.111.065.17.1.08.044.159.093.239.136.271.158.53.321.79.479.509.321.992.637,1.442.953.1.071.2.142.3.207.334.245.652.485.949.73,0,.005,0,.005.005.005.1.076.2.158.292.234.08.076.164.142.244.218.276.245.53.479.764.719a3.046,3.046,0,0,1,.223.234.65.65,0,0,1,.085.087c.106.109.2.218.292.327a.307.307,0,0,1,.037.049c.127.152.244.3.355.457.053.076.111.153.159.229.064.093.127.191.18.283.048.076.09.158.133.234a4,4,0,0,1,.286.615,2.894,2.894,0,0,1,.143.447A3.265,3.265,0,0,1,612.764,596.035Z"
                  transform="translate(-330.001 -344.748)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_39"
                  data-name="Path 39"
                  d="M612.759,596.039c-.005.953-.016,2.287-.058,3.937-.005.229-.016.463-.021.7-.053,2.314-.133,5.173-.244,8.4-.005.2-.011.387-.021.583-.148,3.943-.382,8.534-.785,15.8-.748,13.429-2.052,1.846-3.362,6.557-3.638-2.3-7.626-4.705-11.889-7.177q-1.153-.67-2.328-1.345c-8.527-4.885-18.051-10-27.994-15.074-.392-.2-.79-.4-1.183-.6-22.776-11.561-47.636-22.807-67.776-30.311-3.887-1.449-7.6-2.756-11.088-3.9a120.523,120.523,0,0,0-18.592-4.83c-5.091-.762-8.607-.49-10.028,1.084q-.08-1.666-.164-3.191-.032-.506-.064-1c.033-.09.075-.175.116-.261.006-.013.01-.026.016-.038a.545.545,0,0,1,.037-.082.882.882,0,0,1,.053-.1.581.581,0,0,1,.064-.109c.048-.076.1-.158.159-.234a1.887,1.887,0,0,1,.138-.163.347.347,0,0,1,.058-.071c.021-.022.042-.049.069-.076a.162.162,0,0,1,.042-.044,1.094,1.094,0,0,1,.138-.136,5.138,5.138,0,0,1,.6-.49c.074-.049.154-.1.228-.152a10.035,10.035,0,0,1,1.681-.828c.2-.076.4-.147.62-.223.08-.022.154-.049.233-.076.117-.038.233-.076.355-.1.6-.185,1.257-.343,1.962-.49.212-.044.435-.087.658-.125l.552-.1c1.575-.256,3.362-.447,5.335-.572l.557-.033.658-.033c.186-.011.377-.016.567-.022s.377-.016.573-.022c.536-.016,1.087-.033,1.649-.044,1.6-.027,3.288-.016,5.059.022.822.016,1.66.044,2.519.082.053,0,.111.005.164.005.748.022,1.506.06,2.275.1.541.027,1.087.054,1.633.087.514.033,1.034.065,1.559.1.408.022.817.054,1.23.082.35.027.7.054,1.05.076l1.262.1,1.761.147,1.787.163c.6.054,1.2.114,1.808.174l.18.016c.551.06,1.1.114,1.66.174q4.629.482,9.529,1.127,2.927.384,5.929.822c3.039.441,6.125.92,9.232,1.432s6.243,1.064,9.391,1.639c.8.147,1.591.294,2.392.447q1.464.278,2.927.566c.615.12,1.23.24,1.845.365l2.2.441c4.82.98,9.614,2.026,14.291,3.12.769.18,1.538.365,2.3.545q2.291.547,4.539,1.111l1.23.31q1.535.392,3.039.784v.005c.058.011.117.027.175.044.732.191,1.458.381,2.18.577q2.553.686,5.022,1.383c1.092.316,2.174.626,3.24.942,1.6.479,3.161.958,4.682,1.438.377.12.753.24,1.124.354q1.671.539,3.277,1.073c.848.283,1.676.572,2.492.86s1.617.577,2.4.866c.509.185,1.008.376,1.5.561.721.272,1.421.545,2.111.822.212.082.419.169.626.251.387.152.764.31,1.135.468.249.1.493.2.737.31s.483.2.716.3.472.2.705.31c.2.082.387.169.573.256.377.169.753.338,1.119.512.18.087.361.169.541.256l.414.2c.058.033.117.06.175.087.451.218.886.436,1.31.654.4.207.785.414,1.156.615.44.24.859.474,1.262.713.08.044.159.093.239.136.27.158.53.321.79.479.509.321.992.637,1.442.953s.859.626,1.246.937c0,.005,0,.005.005.005.186.153.366.3.536.452.276.245.53.479.764.719a3.046,3.046,0,0,1,.223.234.643.643,0,0,1,.085.087c.111.125.223.251.329.376.127.152.244.3.355.457.053.076.111.152.159.229.064.093.127.191.18.283.048.076.09.158.133.234a4,4,0,0,1,.286.615,3.342,3.342,0,0,1,.143.447,3.263,3.263,0,0,1,.09.441Z"
                  transform="translate(-329.996 -344.751)"
                  opacity="0.2"
                />
              </g>
            </svg>
          </div>
        </Link>
        <Link href="/advanced">
          <div className="level-container">
            <h2 className="level-text">ADVANCED</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310.251 292.158"
            >
              <g
                id="undraw_feeling_proud_qne1"
                transform="translate(-0.001 0.028)"
              >
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M516.326,380.018v80.7l13.5,22,1.027,1.673h53.264l1.076-104.376Z"
                  transform="translate(-291.081 -214.253)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M516.326,380.018v80.7l13.5,22,.828-102.7Z"
                  transform="translate(-291.081 -214.253)"
                  opacity="0.1"
                />
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M132.57,375.084v80.7l-13.5,22-1.027,1.673H64.779L63.7,375.084Z"
                  transform="translate(-35.913 -211.472)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_43"
                  data-name="Path 43"
                  d="M203.051,375.084v80.7l-13.5,22-.828-102.7Z"
                  transform="translate(-106.393 -211.472)"
                  opacity="0.1"
                />
                <path
                  id="Path_44"
                  data-name="Path 44"
                  d="M337.126,350.526v4.842H47.67v-6.994l26.9-13.989H313.453Z"
                  transform="translate(-26.874 -188.527)"
                  fill="#e6e6e6"
                />
                <path
                  id="Path_45"
                  data-name="Path 45"
                  d="M337.126,368.6v4.842H47.67v-6.994Z"
                  transform="translate(-26.874 -206.605)"
                  opacity="0.1"
                />
                <path
                  id="Path_46"
                  data-name="Path 46"
                  d="M119,422.016H106.082l-5.38-3.766h24.211Z"
                  transform="translate(-56.771 -235.807)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_47"
                  data-name="Path 47"
                  d="M119,457.782H106.082l-5.38-3.766h24.211Z"
                  transform="translate(-56.771 -255.97)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_48"
                  data-name="Path 48"
                  d="M119,508.348H106.082l-5.38-3.767h24.211Z"
                  transform="translate(-56.771 -284.476)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_49"
                  data-name="Path 49"
                  d="M119,558.913H106.082l-5.38-3.766h24.211Z"
                  transform="translate(-56.771 -312.983)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_50"
                  data-name="Path 50"
                  d="M587.609,426.949h12.913l5.38-3.766H581.691Z"
                  transform="translate(-327.931 -238.588)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_51"
                  data-name="Path 51"
                  d="M587.609,462.715h12.913l5.38-3.766H581.691Z"
                  transform="translate(-327.931 -258.751)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_52"
                  data-name="Path 52"
                  d="M587.609,513.281h12.913l5.38-3.766H581.691Z"
                  transform="translate(-327.931 -287.258)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_53"
                  data-name="Path 53"
                  d="M587.609,563.846h12.913l5.38-3.766H581.691Z"
                  transform="translate(-327.931 -315.764)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_54"
                  data-name="Path 54"
                  d="M714.027,235.615H605.321a4.111,4.111,0,0,0-4.111,4.112v73.227a4.111,4.111,0,0,0,4.112,4.111h41.265l-1.546,9.871s-8.835,4.694-2.623,4.832,35.479,0,35.479,0,5.66,0-3.313-4.97l-1.454-9.733h40.9a4.111,4.111,0,0,0,4.111-4.112V239.726a4.111,4.111,0,0,0-4.111-4.111Z"
                  transform="translate(-445.556 -183.083)"
                  fill="#3f3d56"
                />
                <rect
                  id="Rectangle_82"
                  data-name="Rectangle 82"
                  width="109.059"
                  height="61.018"
                  transform="translate(159.589 56.881)"
                  fill="#f2f2f2"
                />
                <circle
                  id="Ellipse_7"
                  data-name="Ellipse 7"
                  cx="0.69"
                  cy="0.69"
                  r="0.69"
                  transform="translate(213.428 54.258)"
                  fill="#f2f2f2"
                />
                <circle
                  id="Ellipse_8"
                  data-name="Ellipse 8"
                  cx="2.623"
                  cy="2.623"
                  r="2.623"
                  transform="translate(211.495 125.768)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_55"
                  data-name="Path 55"
                  d="M385.473,351.53v1.381H311.2v-1.1l.1-.276,1.83-4.97h70.819Z"
                  transform="translate(-175.442 -195.391)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_56"
                  data-name="Path 56"
                  d="M764.43,463.87c-.135.578-.646,1.189-1.8,1.766-4.141,2.071-12.563-.552-12.563-.552s-6.488-1.1-6.488-4a5.183,5.183,0,0,1,.569-.338c1.741-.921,7.514-3.194,17.751.1a4.27,4.27,0,0,1,1.946,1.275,2.036,2.036,0,0,1,.585,1.757Z"
                  transform="translate(-525.818 -309.083)"
                  fill="#3f3d56"
                />
                <path
                  id="Path_57"
                  data-name="Path 57"
                  d="M765.165,463.87c-5.069,1.942-9.588,2.087-14.225-1.133a10.184,10.184,0,0,0-6.058-1.995c1.741-.921,7.514-3.194,17.751.1a4.269,4.269,0,0,1,1.946,1.275,2.036,2.036,0,0,1,.585,1.757Z"
                  transform="translate(-526.553 -309.083)"
                  opacity="0.1"
                />
                <ellipse
                  id="Ellipse_9"
                  data-name="Ellipse 9"
                  cx="1.795"
                  cy="0.552"
                  rx="1.795"
                  ry="0.552"
                  transform="translate(230.462 152.549)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_58"
                  data-name="Path 58"
                  d="M385.473,357.952v1.381H311.2v-1.1l.1-.276Z"
                  transform="translate(-175.442 -201.813)"
                  opacity="0.1"
                />
                <path
                  id="Path_59"
                  data-name="Path 59"
                  d="M321.126,115.143a3.732,3.732,0,0,0-2.164.483,5.646,5.646,0,0,0-1.464,1.932,23.115,23.115,0,0,1-6.3,7.113c-1.871,1.371-4.25,3.08-3.93,5.607a7.578,7.578,0,0,0,.912,2.367c1.726,3.484,6.436,6.177,5.973,10.153,1.715-2.871-.579-4.29,1.136-7.161.817-1.367,2.235-2.91,3.468-2.052.413.287.684.8,1.114,1.055,1.026.6,2.117-.549,3.025-1.364,3.131-2.811,7.583-2.074,11.479-1.2,1.839.413,3.86.956,4.947,2.714,1.43,2.311-1.358,4.808-2.063,7.421a1.424,1.424,0,0,0,1.528,1.772c1.169-.115,2.554-.21,2.623-.723,1.471.052,3.273-.114,3.9-1.646a6.439,6.439,0,0,0,.3-1.873c.231-2.573,1.323-4.92,2.047-7.368s1.038-5.318-.183-7.489a8.666,8.666,0,0,0-1.6-1.944C338.956,116.238,329.848,115.133,321.126,115.143Z"
                  transform="translate(-279.83 -115.159)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_60"
                  data-name="Path 60"
                  d="M319.284,186.972s1.507,12.554-4.017,13.559,5.022,18.078,5.022,18.078l25.109,3.013-6.026-20.087s-4.017-1.507-1.507-11.55S319.284,186.972,319.284,186.972Z"
                  transform="translate(-283.451 -154.311)"
                  fill="#ffb8b8"
                />
                <path
                  id="Path_61"
                  data-name="Path 61"
                  d="M47.028,569.318l2.009,27.62H59.582l-3.013-27.62Z"
                  transform="translate(-26.512 -320.972)"
                  fill="#ffb8b8"
                />
                <path
                  id="Path_62"
                  data-name="Path 62"
                  d="M224.3,448.3l1.506,23.1,11.55-5.022L232.84,447.3Z"
                  transform="translate(-126.452 -252.183)"
                  fill="#ffb8b8"
                />
                <path
                  id="Path_63"
                  data-name="Path 63"
                  d="M274.167,414.988s.5,29.126,3.515,38.668,2.511,10.044,2.009,11.55-1,.5-1,3.013-1,42.183,0,45.7-3.013,9.541,0,10.044,17.074,0,17.576-3.013-4.017-4.017-2.009-6.026,5.022-43.187,5.022-43.187l7.03-28.624,13.057-15.065h27.62l8.537,33.144s-3.515,9.541-1,9.541,17.576,3.013,17.576-8.035S367.07,419.006,366.065,418s.5-4.52-1-6.026-19.083-12.052-25.611-14.061-15.686-4.4-15.686-4.4Z"
                  transform="translate(-261.184 -272.1)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_64"
                  data-name="Path 64"
                  d="M481.351,596.472s-7.533-2.511-11.048,5.022-2.009,9.541-2.009,9.541,11.55,4.017,13.559,2.009c.874-.874,3.649-1.177,6.506-1.242,4.351-.1,5.508-6.253,1.4-7.686q-.184-.064-.372-.111C485.369,603,481.351,596.472,481.351,596.472Z"
                  transform="translate(-370.443 -386.291)"
                  fill="#2f2e41"
                />
                <circle
                  id="Ellipse_10"
                  data-name="Ellipse 10"
                  cx="15.065"
                  cy="15.065"
                  r="15.065"
                  transform="translate(32.066 10.816)"
                  fill="#ffb8b8"
                />
                <path
                  id="Path_65"
                  data-name="Path 65"
                  d="M291.326,229.9s24.607,5.022,30.633-3.013,8.537,22.6,8.537,22.6l3.013,32.139-4.52,17.576s-23.6,19.083-31.135,20.589-19.083,2.511-19.083,2.511,3.515-55.742,3.515-56.746S291.326,229.9,291.326,229.9Z"
                  transform="translate(-263.78 -177.407)"
                  fill="#6c63ff"
                />
                <path
                  id="Path_66"
                  data-name="Path 66"
                  d="M284.933,212.1s-5.475-3.136-6.981-.123-15.567,10.546-17.074,10.546,3.013,41.681,1,46.7-11.55,41.681-6.026,44.694,1.507-3.013,7.03,4.52,32.641,7.533,34.148,4.52-12.052-25.611-9.541-46.7,6.528-50.218,3.013-54.235A34.937,34.937,0,0,1,284.933,212.1Z"
                  transform="translate(-249.903 -169.017)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_67"
                  data-name="Path 67"
                  d="M366.258,218.609l.7-2.407s20.894,6.927,21.9,11.446.5,36.157-3.013,38.668-8.537,6.528-5.022,12.554,7.533,12.554,10.546,13.057,8.537,4.017,7.03,7.533-19.585-3.013-19.585-3.013-12.052-9.039-11.55-23.1S366.258,218.609,366.258,218.609Z"
                  transform="translate(-313.1 -172.138)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_68"
                  data-name="Path 68"
                  d="M377.233,357.554l-12.052,22.6s-17.576,18.078-7.533,20.087,15.568-16.572,15.568-16.572l13.057-18.581Z"
                  transform="translate(-306.499 -251.826)"
                  fill="#ffb8b8"
                />
                <path
                  id="Path_69"
                  data-name="Path 69"
                  d="M326.144,124.183a3.419,3.419,0,0,0-1.762.342,4.106,4.106,0,0,0-1.192,1.366,17.351,17.351,0,0,1-5.126,5.027c-1.523.969-3.459,2.177-3.2,3.963a4.956,4.956,0,0,0,.742,1.673,13.159,13.159,0,0,1,1.6,8.2l4.188-6.087c.665-.966,1.82-2.057,2.823-1.45.336.2.557.568.907.746.835.425,1.723-.388,2.462-.964,2.549-1.986,6.173-1.466,9.345-.847,1.5.292,3.142.676,4.027,1.918,1.471,2.065-.065,5.048.793,7.434a2.192,2.192,0,0,0,.907-1.447c1.2.037,2.664-.081,3.177-1.163a4.009,4.009,0,0,0,.246-1.324,24.487,24.487,0,0,1,1.666-5.208c.589-1.731.845-3.759-.149-5.293a6.4,6.4,0,0,0-1.3-1.374C340.659,124.957,333.245,124.176,326.144,124.183Z"
                  transform="translate(-284.115 -120.257)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_70"
                  data-name="Path 70"
                  d="M401.356,237.836l4.679,1.242s10.889,27.884,8.378,46.967S410.4,301.11,410.4,301.11s-4.017-9.039-13.057-7.03Z"
                  transform="translate(-330.623 -184.335)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_71"
                  data-name="Path 71"
                  d="M282.369,737.525c-1.211,1.646-.968,4-2.041,5.737-.93,1.507-2.682,2.3-3.845,3.633a9.739,9.739,0,0,0-.989,1.422c-1.079,1.807-1.956,4.123-.893,5.94.855,1.462,2.651,2.033,4.3,2.422a15.776,15.776,0,0,0,6.353.51,6.327,6.327,0,0,0,4.917-3.67,14.174,14.174,0,0,1,.526-1.484c1.142-2.248,4.723-2.272,5.892-4.506.818-1.563.066-3.453-.685-5.05l-2.3-4.876c-.762-1.618-3.849-.688-5.459-1.075C286.049,736.023,283.879,735.466,282.369,737.525Z"
                  transform="translate(-261.157 -465.21)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_72"
                  data-name="Path 72"
                  d="M254.6,376.034l21.091,32.642s13.057,16.572,17.074,9.039S278.7,397.628,278.7,397.628l-13.559-25.109Z"
                  transform="translate(-250.152 -260.263)"
                  fill="#ffb8b8"
                />
                <path
                  id="Path_73"
                  data-name="Path 73"
                  d="M259.4,238.84l-4.017-1s-8.035,2.511-10.044,13.057-.5,52.728,2.009,53.231,12.4-7.345,13.984-5.681-3.439-6.873-1.932-11.393S259.4,238.84,259.4,238.84Z"
                  transform="translate(-244.406 -184.335)"
                  fill="#2f2e41"
                />
                <g
                  id="Group_13"
                  data-name="Group 13"
                  transform="translate(174.472 76.921)"
                >
                  <rect
                    id="Rectangle_55"
                    data-name="Rectangle 55"
                    width="12.979"
                    height="3.125"
                    transform="translate(16.344)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_56"
                    data-name="Rectangle 56"
                    width="4.567"
                    height="3.125"
                    transform="translate(69.704)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_57"
                    data-name="Rectangle 57"
                    width="4.567"
                    height="3.125"
                    transform="translate(78.837)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_58"
                    data-name="Rectangle 58"
                    width="31.006"
                    height="3.125"
                    transform="translate(33.891)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_59"
                    data-name="Rectangle 59"
                    width="12.979"
                    height="3.125"
                    transform="translate(0 20.19)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_60"
                    data-name="Rectangle 60"
                    width="4.567"
                    height="3.125"
                    transform="translate(53.359 20.19)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_61"
                    data-name="Rectangle 61"
                    width="4.567"
                    height="3.125"
                    transform="translate(62.493 20.19)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_62"
                    data-name="Rectangle 62"
                    width="31.006"
                    height="3.125"
                    transform="translate(17.546 20.19)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_63"
                    data-name="Rectangle 63"
                    width="12.979"
                    height="3.125"
                    transform="translate(53.6 6.97)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_64"
                    data-name="Rectangle 64"
                    width="12.979"
                    height="3.125"
                    transform="translate(71.146 6.97)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_66"
                    data-name="Rectangle 66"
                    width="4.567"
                    height="3.125"
                    transform="translate(0 6.97)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_67"
                    data-name="Rectangle 67"
                    width="4.567"
                    height="3.125"
                    transform="translate(9.134 6.97)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_68"
                    data-name="Rectangle 68"
                    width="31.006"
                    height="3.125"
                    transform="translate(18.267 6.97)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_69"
                    data-name="Rectangle 69"
                    width="12.979"
                    height="3.125"
                    transform="translate(26.68 13.7)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_70"
                    data-name="Rectangle 70"
                    width="12.979"
                    height="3.125"
                    transform="translate(9.134 13.7)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_71"
                    data-name="Rectangle 71"
                    width="4.567"
                    height="3.125"
                    transform="translate(0 13.7)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_73"
                    data-name="Rectangle 73"
                    width="4.567"
                    height="3.125"
                    transform="translate(79.558 13.7)"
                    fill="#6c63ff"
                  />
                  <rect
                    id="Rectangle_74"
                    data-name="Rectangle 74"
                    width="31.006"
                    height="3.125"
                    transform="translate(43.985 13.7)"
                    fill="#6c63ff"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>
      <Link href="/add">
        <p className="submit-idea-btn">Submit your project idea</p>
      </Link>
    </div>
  );
};

export default Home;
