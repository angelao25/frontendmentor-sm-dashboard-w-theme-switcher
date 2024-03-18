import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
};

const networkColors = {
  Facebook: "bg-Facebook-color",
  Twitter: "bg-Twitter-color",
  Instagram: "bg-Instagram-Gradient",
  YouTube: "bg-YouTube-color",
};

export const OverviewCard = ({
  user,
  audienceType,
  audience,
  network,
  isUp,
  today,
}) => {
  return (
    <article className="text-center bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <div className={`${networkColors[network]} w-full h-[4px] mb-8`}></div>
      <div className="flex items-center place-content-center gap-2">
        <img src={networkLogos[network]} alt={`logo ${network}`} />
        <p className="text-xs text-Dark-Grayish-Blue font-bold">{user}</p>
      </div>
      <p className="text-[56px] font-bold text-Very-Dark-Blue dark:text-White-color">
        {audience}
      </p>
      <p className="uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs">
        {audienceType}
      </p>
      <div className="flex items-center place-content-center gap-1">
        <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
        <p
          className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red"}`}
        >
          {today} Today
        </p>
      </div>
    </article>
  );
};

export const OverviewTodayCard = ({
  network,
  statsType,
  stats,
  porcentage,
  isUp,
}) => {
  return (
    <article className="bg-Light-Grayish-Blue w-[326px] h-[125px] cursor-pointer hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brighness-125 mb-4 mx-auto rounded-[5px] p-[27px]">
      <div className="flex justify-between items-center">
        <p className="text-Dark-Grayish-Blue">{statsType}</p>
        <img src={networkLogos[network]} alt="{network}" />
      </div>
      <div className="flex justify-between">
        <p
          className="text-[42px] font-bold text-VeryDarkBlue dark:text-White-color
      "
        >
          {stats}
        </p>
        <div className="flex items-center place-content-center gap-1">
          <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
          <p
            className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red"} `}
          >
            {porcentage} Today
          </p>
        </div>
      </div>
    </article>
  );
};
