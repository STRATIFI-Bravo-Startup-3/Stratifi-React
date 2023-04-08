import React from "react";
import Image from "next/image";
import image from "../../public/images/prelaunchimages.jpg";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const InfluencerAccount = () => {
  return (
    <section>
      <NavBar />
      <div>
        <div className="items-center flex ml-6 space-x-16 pt-7 pb-16 px-10">
          <div className="text-orange-400 text-4xl font-bold">
            Show Profile Details
          </div>
          <div>
            <svg
              width="23"
              height="14"
              viewBox="0 0 23 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.20081 5.05274L9.30223 12.7057C10.5221 13.8581 12.4927 13.8581 13.7127 12.7057L21.8141 5.05274C23.7847 3.1912 22.3771 0 19.5932 0H3.39038C0.606494 0 -0.769809 3.1912 1.20081 5.05274Z"
                fill="#FE9C67"
              />
            </svg>
          </div>
        </div>

        <div className="items-center  border-black border flex space-x-10 container mx-auto">
          {/* Profile */}
          <div className="space-y-3.5">
            <div className="bg-orange-400 rounded-lg pt-0.5 pb-3 pl-12 pr-10">
              <svg
                width="96"
                height="76"
                viewBox="0 0 96 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M94.5776 73.8832C94.2585 74.3403 93.7994 74.7198 93.2465 74.9837C92.6937 75.2475 92.0665 75.3864 91.4282 75.3862H4.17105C3.53316 75.3857 2.90668 75.2464 2.3545 74.9823C1.80232 74.7183 1.34388 74.3387 1.02522 73.8818C0.706565 73.4249 0.538899 72.9068 0.539063 72.3793C0.539226 71.8519 0.707214 71.3338 1.02616 70.877C7.94765 60.9831 18.6139 53.8886 31.0617 50.5255C24.9045 47.4948 20.1207 42.8767 17.445 37.3804C14.7693 31.8841 14.3496 25.8136 16.2504 20.101C18.1513 14.3884 22.2675 9.34971 27.9669 5.75862C33.6664 2.16754 40.6339 0.222656 47.7996 0.222656C54.9653 0.222656 61.9329 2.16754 67.6323 5.75862C73.3318 9.34971 77.448 14.3884 79.3488 20.101C81.2496 25.8136 80.83 31.8841 78.1543 37.3804C75.4786 42.8767 70.6948 47.4948 64.5375 50.5255C76.9853 53.8886 87.6516 60.9831 94.5731 70.877C94.8929 71.3337 95.0617 71.8519 95.0625 72.3796C95.0633 72.9073 94.896 73.4259 94.5776 73.8832Z"
                  fill="#9B00C2"
                />
              </svg>
            </div>
            <div className="text-2xl underline">View Profile</div>
          </div>

          {/* invitation */}
          <div className="space-y-3.5">
            <div className="bg-orange-400 rounded-lg pt-0.5 pb-3 pl-12 pr-10">
              <svg
                width="102"
                height="50"
                viewBox="0 0 102 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.7167 42.8359V49.8502H29.8167V42.8359C29.8167 42.8359 29.8167 28.8073 55.2667 28.8073C80.7167 28.8073 80.7167 42.8359 80.7167 42.8359ZM67.9917 11.2715C67.9917 9.19052 67.2454 7.1563 65.8471 5.42606C64.4489 3.69581 62.4615 2.34725 60.1363 1.5509C57.8111 0.754559 55.2526 0.546199 52.7841 0.952172C50.3157 1.35814 48.0484 2.36022 46.2687 3.83167C44.4891 5.30312 43.2772 7.17787 42.7862 9.21884C42.2952 11.2598 42.5472 13.3753 43.5103 15.2979C44.4734 17.2204 46.1044 18.8636 48.197 20.0198C50.2896 21.1759 52.7499 21.7929 55.2667 21.7929C58.6415 21.7929 61.8782 20.6844 64.2646 18.7113C66.651 16.7381 67.9917 14.0619 67.9917 11.2715ZM81.565 29.0177C83.8836 30.7864 85.7529 32.9192 87.0638 35.2917C88.3747 37.6642 89.1009 40.2288 89.2 42.8359V49.8502H101.925V42.8359C101.925 42.8359 101.925 30.7362 81.565 29.0177ZM76.475 0.750004C75.1934 0.750638 73.9198 0.91629 72.6999 1.24101C75.1815 4.1834 76.512 7.68429 76.512 11.2715C76.512 14.8587 75.1815 18.3595 72.6999 21.3019C73.9198 21.6267 75.1934 21.7923 76.475 21.7929C79.8499 21.7929 83.0865 20.6844 85.4729 18.7113C87.8593 16.7381 89.2 14.0619 89.2 11.2715C89.2 8.48101 87.8593 5.80483 85.4729 3.83167C83.0865 1.85851 79.8499 0.750004 76.475 0.750004ZM34.0583 18.2858H21.3333V7.76432H12.85V18.2858H0.125V25.3001H12.85V35.8216H21.3333V25.3001H34.0583V18.2858Z"
                  fill="#9B00C2"
                />
              </svg>
            </div>
            <div className="text-2xl underline">invitation</div>
          </div>
          {/* Recent collabs */}
          <div className="space-y-3.5">
            <div className="bg-orange-400 rounded-lg pt-0.5 pb-3 pl-12 pr-10">
              <svg
                width="90"
                height="75"
                viewBox="0 0 90 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1625 50.8442V48.2138H6.8V50.8442C6.8 55.7275 9.14617 60.4108 13.3224 63.8639C17.4986 67.3169 23.1627 69.2568 29.0688 69.2568H38.6125V63.996H29.0688C24.8502 63.996 20.8043 62.6104 17.8213 60.144C14.8383 57.6775 13.1625 54.3323 13.1625 50.8442ZM70.425 24.5405V27.1709H76.7875V24.5405C76.7875 19.6572 74.4413 14.9739 70.2651 11.5208C66.0889 8.06782 60.4248 6.12793 54.5188 6.12793H44.975V11.3887H54.5188C56.6076 11.3887 58.676 11.7288 60.6058 12.3898C62.5357 13.0507 64.2891 14.0195 65.7662 15.2408C67.2432 16.462 68.4149 17.9119 69.2142 19.5075C70.0136 21.1032 70.425 22.8134 70.425 24.5405ZM29.0688 24.5405H9.98125C7.45009 24.5405 5.0226 25.3719 3.2328 26.8518C1.443 28.3316 0.4375 30.3388 0.4375 32.4316V37.6924H6.8V32.4316C6.8 31.734 7.13517 31.065 7.73177 30.5717C8.32837 30.0784 9.13753 29.8012 9.98125 29.8012H29.0688C29.9125 29.8012 30.7216 30.0784 31.3182 30.5717C31.9148 31.065 32.25 31.734 32.25 32.4316V37.6924H38.6125V32.4316C38.6125 30.3388 37.607 28.3316 35.8172 26.8518C34.0274 25.3719 31.5999 24.5405 29.0688 24.5405ZM19.525 21.9101C22.0418 21.9101 24.502 21.2931 26.5946 20.137C28.6872 18.9808 30.3182 17.3376 31.2814 15.4151C32.2445 13.4925 32.4965 11.377 32.0055 9.33603C31.5145 7.29506 30.3026 5.42031 28.5229 3.94886C26.7433 2.47741 24.4759 1.47533 22.0075 1.06936C19.5391 0.663386 16.9805 0.871746 14.6554 1.66809C12.3302 2.46444 10.3428 3.813 8.94455 5.54325C7.54631 7.2735 6.8 9.30772 6.8 11.3887C6.8 14.1791 8.14067 16.8553 10.5271 18.8285C12.9135 20.8016 16.1501 21.9101 19.525 21.9101ZM19.525 6.12793C20.7834 6.12793 22.0135 6.43647 23.0598 7.01452C24.1061 7.59258 24.9216 8.41419 25.4032 9.37547C25.8847 10.3367 26.0107 11.3945 25.7652 12.415C25.5198 13.4355 24.9138 14.3728 24.024 15.1086C23.1342 15.8443 22.0005 16.3453 20.7663 16.5483C19.5321 16.7513 18.2528 16.6471 17.0902 16.249C15.9276 15.8508 14.9339 15.1765 14.2348 14.3114C13.5357 13.4463 13.1625 12.4291 13.1625 11.3887C13.1625 9.99343 13.8328 8.65534 15.026 7.66876C16.2192 6.68218 17.8376 6.12793 19.525 6.12793ZM79.9688 61.3657H60.8813C58.3501 61.3657 55.9226 62.197 54.1328 63.6769C52.343 65.1568 51.3375 67.1639 51.3375 69.2568V74.5175H57.7V69.2568C57.7 68.5592 58.0352 67.8901 58.6318 67.3968C59.2284 66.9035 60.0375 66.6264 60.8813 66.6264H79.9688C80.8125 66.6264 81.6216 66.9035 82.2182 67.3968C82.8148 67.8901 83.15 68.5592 83.15 69.2568V74.5175H89.5125V69.2568C89.5125 67.1639 88.507 65.1568 86.7172 63.6769C84.9274 62.197 82.4999 61.3657 79.9688 61.3657ZM57.7 48.2138C57.7 50.2948 58.4463 52.329 59.8446 54.0592C61.2428 55.7895 63.2302 57.1381 65.5554 57.9344C67.8806 58.7307 70.4391 58.9391 72.9075 58.5331C75.3759 58.1272 77.6433 57.1251 79.4229 55.6536C81.2026 54.1822 82.4145 52.3074 82.9055 50.2665C83.3965 48.2255 83.1445 46.11 82.1814 44.1874C81.2183 42.2649 79.5873 40.6217 77.4946 39.4655C75.402 38.3094 72.9418 37.6924 70.425 37.6924C67.0501 37.6924 63.8135 38.8009 61.4271 40.774C59.0407 42.7472 57.7 45.4234 57.7 48.2138ZM76.7875 48.2138C76.7875 49.2543 76.4144 50.2714 75.7152 51.1365C75.0161 52.0017 74.0224 52.6759 72.8598 53.0741C71.6972 53.4723 70.4179 53.5765 69.1837 53.3735C67.9495 53.1705 66.8158 52.6695 65.926 51.9337C65.0362 51.198 64.4303 50.2606 64.1848 49.2401C63.9393 48.2197 64.0653 47.1619 64.5468 46.2006C65.0284 45.2394 65.8439 44.4177 66.8902 43.8397C67.9365 43.2616 69.1666 42.9531 70.425 42.9531C72.1124 42.9531 73.7308 43.5073 74.924 44.4939C76.1172 45.4805 76.7875 46.8186 76.7875 48.2138Z"
                  fill="#9B00C2"
                />
              </svg>
            </div>
            <div className="text-2xl underline">Recent collabs</div>
          </div>
          {/* Messages */}
          <div className="space-y-3.5">
            <div className="bg-orange-400 rounded-lg pt-0.5 pb-3 pl-12 pr-10">
              <svg
                width="94"
                height="81"
                viewBox="0 0 94 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.8693 51.0117V58.026C55.8693 58.9561 55.4224 59.8482 54.6269 60.5059C53.8314 61.1636 52.7526 61.5331 51.6276 61.5331H21.9359L9.21094 72.0546V36.983C9.21094 36.0529 9.65783 35.1608 10.4533 34.5031C11.2488 33.8454 12.3276 33.4759 13.4526 33.4759H21.9359M85.5609 47.5045L72.8359 36.983H43.1443C42.0193 36.983 40.9404 36.6135 40.145 35.9558C39.3495 35.2981 38.9026 34.406 38.9026 33.4759V12.4329C38.9026 11.5028 39.3495 10.6107 40.145 9.953C40.9404 9.29528 42.0193 8.92578 43.1443 8.92578H81.3193C82.4442 8.92578 83.5231 9.29528 84.3186 9.953C85.1141 10.6107 85.5609 11.5028 85.5609 12.4329V47.5045Z"
                  stroke="#9B00C2"
                  stroke-width="16.6667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-2xl underline">Messages</div>
          </div>
          {/* Billing */}
          <div className="space-y-3.5">
            <div className="bg-orange-400 rounded-lg pt-0.5 pb-3 pl-12 pr-10">
              <svg
                width="74"
                height="36"
                viewBox="0 0 74 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.16354 0.140625C4.03858 0.140625 2.9597 0.510129 2.16423 1.16785C1.36876 1.82557 0.921875 2.71763 0.921875 3.64778V31.705C0.921875 32.6352 1.36876 33.5273 2.16423 34.185C2.9597 34.8427 4.03858 35.2122 5.16354 35.2122H68.7885C69.9135 35.2122 70.9924 34.8427 71.7879 34.185C72.5833 33.5273 73.0302 32.6352 73.0302 31.705V3.64778C73.0302 2.71763 72.5833 1.82557 71.7879 1.16785C70.9924 0.510129 69.9135 0.140625 68.7885 0.140625H5.16354ZM11.5218 3.64778H62.4282C62.4298 5.04164 63.1007 6.37793 64.2933 7.36304C65.4859 8.34816 67.1028 8.9015 68.7885 8.9015V26.4443C67.107 26.4513 65.4973 27.0087 64.3116 27.9946C63.126 28.9805 62.461 30.3147 62.4621 31.705H11.5176C11.4964 30.3226 10.8179 29.0026 9.62879 28.0306C8.43971 27.0586 6.83564 26.5127 5.16354 26.5109V8.90852C5.99888 8.90852 6.82603 8.77242 7.59772 8.508C8.36942 8.24358 9.07053 7.85602 9.66101 7.36747C10.2515 6.87892 10.7197 6.29895 11.039 5.66071C11.3583 5.02247 11.5224 4.33847 11.5218 3.64778Z"
                  fill="#9B00C2"
                />
              </svg>
            </div>
            <div className="text-2xl underline">Billing</div>
          </div>
          {/* Security */}
          <div className="space-y-3.5">
            <div className="bg-orange-400 rounded-lg pt-0.5 pb-3 pl-12 pr-10">
              <svg
                width="68"
                height="70"
                viewBox="0 0 68 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.0271 69.2355C33.2494 69.2355 32.5241 69.1911 31.8511 69.1023C31.1781 69.0134 30.5602 68.8825 29.9975 68.7095C21.2314 66.0206 14.0559 61.2275 8.47104 54.3301C2.88618 47.4327 0.09375 39.8339 0.09375 31.5336V14.9623C0.09375 13.501 0.606991 12.1858 1.63347 11.0167C2.65996 9.84767 3.98477 9.0001 5.60792 8.47403L31.0579 0.582926C32.0476 0.290663 33.0374 0.144531 34.0271 0.144531C35.0168 0.144531 36.0065 0.290663 36.9962 0.582926L62.4462 8.47403C64.0722 9.0001 65.3984 9.84767 66.4249 11.0167C67.4514 12.1858 67.9632 13.501 67.9604 14.9623V31.5336C67.9604 39.8339 65.168 47.4327 59.5831 54.3301C53.9983 61.2275 46.8228 66.0206 38.0567 68.7095C37.4911 68.8848 36.8732 69.0169 36.2031 69.1058C35.5329 69.1946 34.8075 69.2379 34.0271 69.2355ZM34.0271 62.3966C40.8844 60.643 46.6107 57.1803 51.2058 52.0084C55.801 46.8365 58.4874 41.0637 59.265 34.69H34.0271V7.07117L8.57708 14.9623V33.1118C8.57708 33.521 8.64778 34.0471 8.78917 34.69H34.0271V62.3966Z"
                  fill="#9B00C2"
                />
              </svg>
            </div>
            <div className="text-2xl underline">Security</div>
          </div>
        </div>
        {/* first section */}
        <section className="container mx-auto py-6 px-20 pt-20 ">
          <h1 className="text-4xl font-bold text-center">Invitations</h1>
          <div className="bg-purple-500 rounded-lg shadow w-[543]px">
            <div className="text-xl font-medium px-8 py-8">
              <div className="text-center font-bold text-3xl underline">
                House of Thera Pre-launch campaign
              </div>
            </div>
            <div className="items-start flex ">
              <div className="flex-col py-4 px-4">
                <div className="text-xl font-medium px-8 py-8">
                  <div className="bg-white rounded-lg px-14 py-5">
                    Lifestyle
                  </div>
                </div>
                <div className="items-center flex text-xl font-medium px-8  ">
                  <div className="bg-white rounded-lg pt-4 pb-7 px-16">
                    Fashion
                  </div>
                </div>
              </div>

              <div className="">
                <div className="px-20 pb-4">
                  {" "}
                  <Image src={image} alt="" width={500} height={500} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-xl font-medium px-8 py-8">
              <div className="bg-orange-400 rounded-lg px-14 py-5">Message</div>
            </div>
            <div className="text-xl font-medium px-8 py-8 ">
              <div className="bg-orange-400 rounded-lg px-14 py-5">View</div>
            </div>
          </div>
        </section>

        {/* second section */}
        <section className="container mx-auto py-6 px-20 pt-20 ">
          <h1 className="text-4xl font-bold text-center">
            Collabs you may like
          </h1>
          <div className="bg-purple-500 rounded-lg shadow w-[543]px">
            <div className="text-xl font-medium px-8 py-8">
              <div className="text-center font-bold text-3xl underline">
                Fitness World
              </div>
            </div>
            <div className="items-start flex ">
              <div className="flex-col py-4 px-4">
                <div className="items-center flex text-xl font-medium px-8  ">
                  <div className="bg-white rounded-lg pt-4 pb-7 px-16 py-2">
                    Sports
                  </div>
                </div>
                <div className="text-xl font-medium px-8 py-8">
                  <div className="bg-white rounded-lg px-14 py-5">
                    Lifestyle
                  </div>
                </div>
                <div className="items-center flex text-xl font-medium px-8  ">
                  <div className="bg-white rounded-lg pt-4 pb-7 px-16">
                    Health/fitness
                  </div>
                </div>
              </div>

              <div className="">
                <div className="px-20 pb-4">
                  {" "}
                  <Image src={image} alt="" width={500} height={500} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-xl font-medium px-8 py-8">
              <div className="bg-orange-400 rounded-lg px-14 py-5">Message</div>
            </div>
            <div className="text-xl font-medium px-8 py-8 ">
              <div className="bg-orange-400 rounded-lg px-14 py-5">View</div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default InfluencerAccount;
