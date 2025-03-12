const MissionCard = ({ point, t }) => (
  <div className="text-left   rounded-md p-2 md:p-4 xl:p-6">
    <img src={`${t(`points.${point}.icon`)}`} alt="" />

    <h3 className="text-2xl md:text-xl text-secondary font-semibold mt-2 md:mt-4 mb-2">
      {t(`points.${point}.title`)}
    </h3>
    <p className="text-gray-600 text-lg md:text-base">
      {t(`points.${point}.description`)}
    </p>
  </div>
);

export default MissionCard;
