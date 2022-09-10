/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const originalColors = [
  "white",
  "#031f36",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow",
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Section 1",
          textYO: "yo",
        },
        {
          text: "Section 2",
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const watch = "Watch Now.";
    const demand = "On Demand.";
    const text = "yo";
    return (
      <ReactFullpage
        debug /* Debug logging */
        // Required when using extensions
        pluginWrapper={pluginWrapper}
        // fullpage options
        licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation
        anchors={["firstPage", "secondPage", "thirdPage"]}
        sectionSelector={SECTION_SEL}
        onLeave={this.onLeave.bind(this)}
        sectionsColor={this.state.sectionsColor}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className={SEL}>
              <div className="slide">
                <hr className="watch" />
                <h3>{watch}</h3>
                <Box className="grid-spacing" sx={{ flexGrow: 1 }}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} md={3}>
                      <div className="hover">
                        <Card sx={{ maxWidth: 300,borderRadius:5,border:"3px solid #031f36" }}>
                          <Typography sx ={{pt:1,fontWeight:'bold'}} gutterBottom variant="h6" component="div">
                            Spider Man No Way Home
                          </Typography>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="350"
                              image={require("../img/spider.jpg")}
                              alt="Spooder-Man No Way Home"
                            />
                            <CardContent>
                              <Grid container spacing={1}>
                                <Grid item sm={1} md={4}>
                                  <button className="genre-button">
                                    Action
                                  </button>
                                </Grid>
                                <Grid item sm={1} md={4}>
                                  <button className="genre-button">
                                    Fantasy
                                  </button>
                                </Grid>
                              </Grid>

                              <Typography
                                style={{
                                  marginLeft: "-160px",
                                  marginBottom: "5px",
                                }}
                                variant="h6"
                                color="text.primary"
                                component="div"
                              >
                                Description
                              </Typography>
                              <hr className="card-hr" />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                When a spell goes wrong, dangerous foes from
                                other worlds start to appear, forcing Peter to
                                discover what it truly means to be Spider-Man.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                    </Grid>

                    <Grid item sm={6} md={3}>
                      <div className="hover">

                        <Card sx={{ maxWidth: 300,borderRadius:5,border:"3px solid #031f36" }}>
                          <Typography sx ={{pt:1,fontWeight:'bold'}} gutterBottom variant="h6" component="div">
                            Mulan
                          </Typography>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="350"
                              image={require("../img/mulan.jpg")}
                              alt="Not As Good As OG Mulan Mulan"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                <Grid container spacing={1}>
                                  <Grid item sm={1} md={4}>
                                    <button className="genre-button">
                                      Drama
                                    </button>
                                  </Grid>
                                  <Grid item sm={1} md={4}>
                                    <button className="genre-button">
                                      Adventure
                                    </button>
                                  </Grid>
                                </Grid>
                              </Typography>
                              <Typography
                                style={{
                                  marginLeft: "-160px",
                                  marginBottom: "5px",
                                }}
                                variant="h6"
                                color="text.primary"
                                component="div"
                              >
                                Description
                              </Typography>
                              <hr className="card-hr" />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                To save her father from death in the army, a
                                young maiden secretly goes in his place and
                                becomes one of China's greatest heroines in the
                                process.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                    </Grid>

                    <Grid item sm={6} md={3}>
                      <div className="hover">
                        <Card sx={{ maxWidth: 300,borderRadius:5,border:"3px solid #031f36" }}>
                          <Typography sx ={{pt:1,fontWeight:'bold'}} gutterBottom variant="h6" component="div">
                            The Interview
                          </Typography>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="350"
                              image={require("../img/interview.jpg")}
                              alt="The Interview"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                <Grid container spacing={1}>
                                  <Grid item sm={1} md={4}>
                                    <button className="genre-button">
                                      Comedy
                                    </button>
                                  </Grid>
                                  <Grid item sm={1} md={4}>
                                    <button className="genre-button">
                                      Action
                                    </button>
                                  </Grid>
                                </Grid>
                              </Typography>
                              <Typography
                                style={{
                                  marginLeft: "-160px",
                                  marginBottom: "5px",
                                }}
                                variant="h6"
                                color="text.primary"
                                component="div"
                              >
                                Description
                              </Typography>
                              <hr className="card-hr" />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Dave Skylark and his producer Aaron Rapaport run
                                the celebrity tabloid show "Skylark Tonight".
                                North Korean dictator Jong-Un Kim are recruited.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>



              <div className="slide">
                <hr className="demand" />
                <h3>{demand}</h3>
     
                <Box className="grid-spacing-demand" sx={{ flexGrow: 1 }}>
                  <Grid sx={{width:"1500px"}} container spacing={5}>
                    <Grid sx={{ maxWidth: "400px" }} item xs={4}>
                      <div className="tv-hover">
                      <Card sx={{ display: "flex" }}>
                        <Box sx={{display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{flex: "1 0 auto", pr: 11 }}>
                            <Typography sx={{whiteSpace: 'nowrap'}} component="div" variant="h5">
                              Rick And Morty
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                            >
                              Animation & Comedy
                            </Typography>
                            <hr className="tv-hr"/>
                            <Box sx={{ textAlign: "left", pl: 1, pb: 1 }}>
                            Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. Out in dangerous, outlandish adventures throughout space.
                            </Box>
                          </CardContent>
                        </Box>
                        <CardMedia
                          component="img"
                          sx={{ width: 200 }}
                          image={require("../img/ricknmorty.jpg")}
                          alt="Live from space album cover"
                        />
                      </Card>
                      </div>
                    </Grid>


                    <Grid item sx={{ maxWidth: "400px" }} xs={4}>
                    <div className="tv-hover">
                    <Card sx={{ display: "flex" }}>
              
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto", pr: 11 }}>
                            <Typography sx = {{mr:6,whiteSpace: 'nowrap'}} component="div" variant="h5">
                              The Office
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              sx={{ textAlign:"left"}}
                            >
                              Comedy
                            </Typography>
                            <hr className="tv-hr"/>
                            <Box sx={{ textAlign: "left", pl: 1, pb: 1 }}>
                            The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.
                            </Box>
                          </CardContent>
                        </Box>
                        <CardMedia
                          component="img"
                          sx={{ width: 200 }}
                          image={require("../img/office.jpg")}
                          alt="Live from space album cover"
                        />
                      </Card>
                      </div>
                    </Grid>
                    <Grid item sx={{ maxWidth: "400px" }} xs={4}>
                    <div className="tv-hover">
                    <Card sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto", pr: 11 }}>
                            <Typography sx = {{whiteSpace: 'nowrap',mr:2}}component="div" variant="h5">
                              Spy X Family
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                            >
                              Animation & Comedy
                            </Typography>
                            <hr className="tv-hr"/>
                            <Box sx={{ textAlign: "left", pl: 1, pb: 1 }}>
                            Not one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school. 
                            </Box>
                          </CardContent>
                        </Box>
                        <CardMedia
                          component="img"
                          sx={{ width: 200 }}
                          image={require("../img/spy.jpg")}
                          alt="Live from space album cover"
                        />
                      </Card>
                      </div>
                    </Grid>
                    <Grid item sx={{ maxWidth: "400px" }} xs={4}>
                    <div className="tv-hover">
                    <Card sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto", pr: 11 }}>
                            <Typography sx={{whiteSpace: 'nowrap'}} component="div" variant="h5">
                              Modern Family
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              sx={{ textAlign:"left"}}
                            >
                              Comedy
                            </Typography>
                            <hr className="tv-hr"/>
                            <Box sx={{ textAlign: "left", pl: 1, pb: 1 }}>
                            The Pritchett-Dunphy-Tucker clan is a wonderfully large and blended family. They give us an honest and often hilarious look into the sometimes embrace of the modern family.
                            </Box>
                          </CardContent>
                        </Box>
                        <CardMedia
                          component="img"
                          sx={{ width: 200 }}
                          image={require("../img/modern.jpg")}
                          alt="Live from space album cover"
                        />
                      </Card>
                      </div>
                    </Grid>

                    <Grid sx={{ maxWidth: "400px" }} item xs={4}>
                    <div className="tv-hover">
                      <Card sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto", pr: 11 }}>
                            <Typography sx={{whiteSpace: 'nowrap',mr:-2}} component="div" variant="h5">
                              The Mandalorian
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              sx = {{mr:6,whiteSpace: 'nowrap'}}
                            >
                              Sci-Fi & Fantasy
                            </Typography>
                            <hr className="tv-hr"/>
                            <Box sx={{ textAlign: "left", pl: 1, pb: 1 }}>
                            After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.
                            </Box>
                          </CardContent>
                        </Box>
                        <CardMedia
                          component="img"
                          sx={{ width: 200 }}
                          image={require("../img/mando.jpg")}
                          alt="Live from space album cover"
                        />
                      </Card>
                      </div>
                    </Grid>



                                  


                    {/*                */}
                    <Grid sx={{ maxWidth: "400px" }} item xs={4}>
                    <div className="tv-hover">
                      <Card sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto", pr: 11 }}>
                            <Typography sx={{whiteSpace: 'nowrap',mr:-6}} component="div" variant="h5">
                              Kim's Convenience
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              sx={{ textAlign:"left"}}
                            >
                              Comedy
                            </Typography>
                            <hr className="tv-hr"/>
                            <Box sx={{ textAlign: "left", pl: 1, pb: 1 }}>
                            The funny, heartfelt story of The Kims, a Korean-Canadian family, running a convenience store in downtown Toronto. Mr. and Mrs. Kim immigrated who are now young adults. 
                            </Box>
                          </CardContent>
                        </Box>
                        <CardMedia
                          component="img"
                          sx={{ width: 200 }}
                          image={require("../img/kim.jpg")}
                          alt="Live from space album cover"
                        />
                      </Card>
                      </div>
                    </Grid>



                  </Grid>
                </Box>
              </div>
            </div>

            <div className={SEL}>
              <div className="section">
                <h3>{text}</h3>
              </div>
            </div>


            <div className={SEL}>
              <div className="section">
                <h3>{text}</h3>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    );
  }
}

export default Home;
