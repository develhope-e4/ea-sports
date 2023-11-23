import classes from  "./BannerParentingTools.module.scss";

const BannerParentingTools = () => {
  return (
    <div className={classes.ContBanner}>
      <img className={classes.bannerImg} src="./Info/backGroundIMGadapt.1920w.jpg" alt="" />
      <div>
        <h1>Herramientas parentales y de juego</h1>
      </div>
    </div>
  );
};

export default BannerParentingTools;
