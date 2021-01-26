import React from "react";
import { Grid } from "@material-ui/core";

export default function Footer() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="footer-top-content"
      >
        {/* <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          style={{ height: '100%' }}
        > */}
        <Grid item xs={12} md={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={11} md={8} className="text-center footer-heading">
              You can Hire me.
            </Grid>
            <Grid item xs={11} md={8} className="text-center footer-subheading">
              I'm currently available for full-time and freelance.
            </Grid>
            <Grid item xs={11} md={8} className="text-center footer-content">
              If you have a project that you want to get started, think you need
              my help with something, then get in
              touch.
            </Grid>
            <Grid item xs={11} md={8} className="text-center footer-btn">
              <div>
                <a href="/" class="contact-btn">
                  <svg
                    width="1.34em"
                    height="0.8em"
                    viewBox="0 0 512 390"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginTop: "0.25em" }}
                  >
                    <path
                      d="M467 0H44.9999C38.0729 0 31.5879 1.703 25.7209 4.51L255 233.789L306.389 184.402C306.389 184.402 306.393 184.397 306.394 184.395C306.395 184.393 306.399 184.391 306.399 184.391L486.286 4.514C480.418 1.705 473.929 0 467 0Z"
                      fill="white"
                    />
                    <path
                      d="M507.496 25.728L338.213 195.002L507.49 364.279C510.297 358.412 512 351.927 512 345V45C512 38.077 510.301 31.593 507.496 25.728Z"
                      fill="white"
                    />
                    <path
                      d="M4.51 25.7209C1.703 31.5879 0 38.0729 0 44.9999V345C0 351.923 1.701 358.409 4.506 364.274L173.789 195L4.51 25.7209Z"
                      fill="white"
                    />
                    <path
                      d="M317.002 216.213L265.606 265.606C262.676 268.536 258.838 270.001 255.001 270.001C251.164 270.001 247.325 268.536 244.396 265.606L195 216.211L25.714 385.486C31.582 388.295 38.071 390 45 390H467C473.927 390 480.412 388.297 486.279 385.49L317.002 216.213Z"
                      fill="white"
                    />
                  </svg>
                  <span class="contact-btn-txt">MESSAGE ME</span>
                </a>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>
      <div className="footer-container">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item>
            <Grid container style={{ padding: "30px" }}>
              <Grid item xs={12} md={12} style={{ padding: "20px" }}>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <a href="https://www.linkedin.com/in/parth-gambhir-835b3011b" rel="noopener noreferrer" target="_blank">
                      <svg
                        version="1.1"
                        height='1.2em'
                        width='1.2em'
                        viewBox="0 0 112.196 112.196"
                        style={{enableBackground:'new 0 0 112.196 112.196'}}
                      >
                        <g>
                          <circle
                            style={{ fill: "#007AB9" }}
                            cx="56.098"
                            cy="56.097"
                            r="56.098"
                          />
                          <g>
                            <path
                              style={{ fill: "#F1F2F2" }}
                              d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
                                c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
                                c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
                                C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
                                c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
                                M27.865,83.739H41.27V43.409H27.865V83.739z"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://www.instagram.com/gamparth/" rel="noopener noreferrer" target="_blank">
                      <svg
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M5.81249 6.32788C-1.49576 13.919 -6.07222e-06 21.9829 -6.07222e-06 46.4806C-6.07222e-06 66.8244 -3.54951 87.2185 15.0272 92.0196C20.8281 93.5115 72.2261 93.5115 78.0192 92.0119C85.7537 90.0163 92.0467 83.7426 92.907 72.8035C93.0271 71.2768 93.0271 21.7116 92.9031 20.1539C91.9886 8.50176 84.816 1.78638 75.3649 0.426254C73.1987 0.112379 72.7647 0.0193793 61.6512 4.32194e-06C22.2309 0.0193793 13.5896 -1.736 5.81249 6.32788V6.32788Z"
                            fill="url(#paint0_linear)"
                          />
                          <path
                            d="M46.4922 12.1636C32.4221 12.1636 19.0611 10.912 13.9577 24.0095C11.8497 29.419 12.1559 36.4444 12.1559 46.5039C12.1559 55.3311 11.873 63.6275 13.9577 68.9944C19.0495 82.0996 32.519 80.8441 46.4845 80.8441C59.9579 80.8441 73.8498 82.2469 79.0151 68.9944C81.127 63.5306 80.817 56.6099 80.817 46.5039C80.817 33.0886 81.5571 24.428 75.051 17.9257C68.4635 11.3382 59.5549 12.1636 46.4767 12.1636H46.4922ZM43.4155 18.352C72.7647 18.3055 76.5002 15.0428 74.4387 60.3686C73.7064 76.3995 61.5001 74.6402 46.4961 74.6402C19.1386 74.6402 18.352 73.8575 18.352 46.4884C18.352 18.8015 20.522 18.3675 43.4155 18.3442V18.352ZM64.821 24.0521C62.5464 24.0521 60.7019 25.8966 60.7019 28.1712C60.7019 30.4459 62.5464 32.2904 64.821 32.2904C67.0956 32.2904 68.9401 30.4459 68.9401 28.1712C68.9401 25.8966 67.0956 24.0521 64.821 24.0521V24.0521ZM46.4922 28.8687C36.7544 28.8687 28.861 36.766 28.861 46.5039C28.861 56.2417 36.7544 64.1351 46.4922 64.1351C56.2301 64.1351 64.1196 56.2417 64.1196 46.5039C64.1196 36.766 56.2301 28.8687 46.4922 28.8687V28.8687ZM46.4922 35.0571C61.6241 35.0571 61.6435 57.9506 46.4922 57.9506C31.3642 57.9506 31.341 35.0571 46.4922 35.0571Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="5.99082"
                            y1="87.06"
                            x2="92.4245"
                            y2="12.2527"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFDD55" />
                            <stop offset="0.5" stopColor="#FF543E" />
                            <stop offset="1" stopColor="#C837AB" />
                          </linearGradient>
                          <clipPath id="clip0">
                            <rect width="93" height="93" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://www.linkedin.com/in/parth-gambhir-835b3011b" rel="noopener noreferrer" target="_blank">
                      <svg
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M93 17.6642C89.5416 19.1813 85.8564 20.1868 82.0144 20.6751C85.9669 18.3152 88.9836 14.6068 90.4018 10.137C86.7167 12.3341 82.6479 13.8861 78.3118 14.7521C74.8127 11.0263 69.8256 8.71875 64.3851 8.71875C53.8296 8.71875 45.3317 17.2864 45.3317 27.7896C45.3317 29.3008 45.4596 30.7539 45.7734 32.1373C29.9228 31.3642 15.8972 23.7673 6.47512 12.1946C4.83019 15.0486 3.86531 18.3152 3.86531 21.8318C3.86531 28.4348 7.26562 34.2879 12.3341 37.6766C9.27094 37.6185 6.26587 36.7292 3.72 35.3284C3.72 35.3865 3.72 35.4621 3.72 35.5376C3.72 44.8027 10.3288 52.4985 18.9952 54.2713C17.4433 54.6956 15.7519 54.8991 13.9965 54.8991C12.7759 54.8991 11.5436 54.8293 10.3869 54.5736C12.8572 62.124 19.8671 67.6749 28.2023 67.8551C21.7155 72.9294 13.4792 75.9868 4.56281 75.9868C2.99925 75.9868 1.49962 75.9171 0 75.7252C8.44556 81.1716 18.4547 84.2812 29.2485 84.2812C64.3327 84.2812 83.514 55.2188 83.514 30.0274C83.514 29.1846 83.4849 28.3708 83.4442 27.5629C87.2282 24.8775 90.4076 21.5237 93 17.6642Z"
                            fill="#03A9F4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="93" height="93" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://github.com/parthgam" rel="noopener noreferrer" target="_blank">
                      <svg
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 97 97"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M48.5 2.02084C75.2963 2.02084 97 23.3608 97 49.6802C97 70.7413 83.1048 88.6014 63.8381 94.8983C61.4131 95.347 60.524 93.8717 60.524 92.6067C60.524 91.475 60.5644 88.4761 60.5846 84.5032C74.0757 87.3768 76.921 78.1093 76.921 78.1093C79.1278 72.6085 82.3166 71.1374 82.3166 71.1374C86.7099 68.1829 81.9771 68.2435 81.9771 68.2435C77.1069 68.575 74.5485 73.1542 74.5485 73.1542C70.224 80.4413 63.1955 78.3356 60.4229 77.119C59.9864 74.0352 58.7375 71.9376 57.3512 70.7453C68.1223 69.553 79.443 65.4548 79.443 47.1945C79.443 41.9929 77.5636 37.7411 74.4515 34.4067C74.9972 33.2023 76.634 28.3563 74.0272 21.7927C74.0272 21.7927 69.9653 20.5155 60.6897 26.679C56.8097 25.6201 52.6872 25.0947 48.5647 25.0705C44.4422 25.0947 40.3197 25.6201 36.4397 26.679C27.2247 20.5155 23.1628 21.7927 23.1628 21.7927C20.5559 28.3563 22.1928 33.2023 22.6778 34.4067C19.5859 37.7411 17.7065 41.9929 17.7065 47.1945C17.7065 65.5033 29.0434 69.5328 39.8347 70.7049C38.1372 72.1357 36.5609 75.0578 36.5609 79.5238C36.5609 85.9016 36.6215 91.0264 36.6215 92.5744C36.6215 93.8233 35.7728 95.3146 33.2872 94.8377C13.8831 88.5812 3.8147e-06 70.709 3.8147e-06 49.6802C3.8147e-06 23.3608 21.7159 2.02084 48.5 2.02084V2.02084Z"
                            fill="#212121"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="97"
                              height="97"
                              fill="white"
                              transform="matrix(-1 0 0 1 97 0)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} style={{ padding: "20px" }}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  &copy; &nbsp; 2020 Parth Gambhir. All rights reserved.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
