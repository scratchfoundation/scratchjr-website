import React from "react";
import "./info.scss";

const InfoSection = () => (
    <div className="content-section" id="info-section">
        <div className="content-section-title">About ScratchJr</div>
        <div className="content-section-description">
            This is background information about ScratchJr. You can find answers
            to troubleshooting questions in the &apos;FAQ&apos; section.
        </div>

        <div id="video-wrapper">
            <iframe
                src="//player.vimeo.com/video/101760650?portrait=0&amp;byline=0&amp;title=0"
                width="640"
                height="360"
                frameBorder="0"
                allowFullScreen
            />
        </div>
        <div id="content-description">
            <div className="content-description-section">
                <div className="content-description-question">
                    What is ScratchJr?
                </div>
                <div className="content-description-answer">
                    ScratchJr is an introductory programming language that
                    enables young children (ages 5-7) to create their own
                    interactive stories and games. Children snap together
                    graphical programming blocks to make characters move, jump,
                    dance, and sing. Children can modify characters in the paint
                    editor, add their own voices and sounds, even insert photos
                    of themselves -- then use the programming blocks to make
                    their characters come to life.
                </div>
                <div className="content-description-answer">
                    ScratchJr was inspired by the popular Scratch programming
                    language (
                    <a href="https://scratch.mit.edu">scratch.mit.edu</a>), used
                    by millions of young people (ages 8 and up) around the
                    world. In creating ScratchJr, we redesigned the interface
                    and programming language to make them developmentally
                    appropriate for younger children, carefully designing
                    features to match young children&apos;s cognitive, personal,
                    social, and emotional development.
                </div>

                <div className="content-description-answer">
                    ScratchJr is available as a free app for iPads, Android
                    tablets, and Chromebooks. For more information about
                    ScratchJr, see{" "}
                    <a href="https://scratchjr.org">scratchjr.org</a>.
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                    Why Did We Create ScratchJr?
                </div>
                <div className="content-description-answer">
                    Coding (or computer programming) is a new type of literacy.
                    Just as writing helps you organize your thinking and express
                    your ideas, the same is true for coding. In the past, coding
                    was seen as too difficult for most people. But we think
                    coding should be for everyone, just like writing.
                </div>
                <div className="content-description-answer">
                    As young children code with ScratchJr, they learn how to
                    create and express themselves with the computer, not just to
                    interact with it. In the process, children learn to solve
                    problems and design projects, and they develop sequencing
                    skills that are foundational for later academic success.
                    They also use math and language in a meaningful and
                    motivating context, supporting the development of
                    early-childhood numeracy and literacy. With ScratchJr,
                    children aren&apos;t just learning to code, they are coding
                    to learn.
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                    Who Created ScratchJr?
                </div>
                <div className="content-description-answer">
                    ScratchJr is a collaboration between the{" "}
                    <a href="//ase.tufts.edu/devtech/">
                        Developmental Technologies (DevTech) Research Group
                    </a>{" "}
                    at the{" "}
                    <a href="//ase.tufts.edu/epcshd/">
                        Eliot-Pearson Department of Child Study and Human
                        Development
                    </a>{" "}
                    at <a href="//www.tufts.edu/">Tufts University</a> (led by{" "}
                    <a href="//www.tufts.edu/~mbers01/">Marina Umaschi Bers</a>,
                    with contributions from Amanda Strawhacker, Claire Caine,
                    Louise Flannery, Elizabeth Kazakoff and Dylan Portelance),
                    the{" "}
                    <a href="h//llk.media.mit.edu/">Lifelong Kindergarten</a>{" "}
                    group at the{" "}
                    <a href="//www.media.mit.edu/">MIT Media Lab</a> (led by{" "}
                    <a href="//web.media.mit.edu/~mres/">Mitchel Resnick</a>,
                    with contributions from Chris Garrity, Tim Mickel, Carl
                    Bowman, Champika Fernando, Natalie Rusk, Sayamindu Dasgupta,
                    and Chris Graves), and the{" "}
                    <a href="//www.playfulinvention.com/">
                        Playful Invention Company
                    </a>{" "}
                    (led by Paula Bont&aacute; and Brian Silverman, with
                    contributions from Jack Geddes and Adrian Gabriel). The
                    Android version of ScratchJr was implemented by{" "}
                    <a href="//www.twosigma.com/">Two Sigma</a> (led by Mark
                    Roth, with contributions from Kevin Hu), with input from
                    Benesse Corp.
                </div>
                <div className="content-description-answer">
                    The graphics and illustrations for ScratchJr were created by{" "}
                    <a href="//www.hvingtquatre.com/">HvingtQuatre Company</a>{" "}
                    (led by Julien Gelifier and Adrien Valesa),{" "}
                    <a href="//sarahjt.com/">Sarah Thomson</a>, Peter Mueller,
                    and Jillian Lombardi. Paula Aguilera of the MIT Media Lab
                    produced the ScratchJr video. We would also like to thank
                    everyone who participated in the beta-test communities for
                    iPad and Android, particularly Sergio Antolinez, Vandendaele
                    Didier, and Sjoerd Dirk Meijer.
                </div>
            </div>
            <div className="content-description-section">
                <div className="content-description-question">
                    Who Helped to Translate ScratchJr?
                </div>
                <div className="content-description-answer">
                    ScratchJr has been translated into Spanish by Teresa
                    Mart&iacute;nez P&eacute;rez, childhood education student;
                    Marta Bonet Garrosa, Manuela Lara Lara, and Lidia
                    Pi&ntilde;eiro Cordero, of Editorial Santillana; Sergio
                    Antolinez, CEO of Tecnoaprendo; and Luisa Mar&iacute;a
                    Palacios Maroto.
                </div>
            </div>
            <div className="content-description-section">
                <div className="content-description-question">
                    Who Supported ScratchJr?
                </div>
                <div className="content-description-answer">
                    The ScratchJr project has received generous financial
                    support from the{" "}
                    <a href="//www.nsf.gov/">National Science Foundation</a>{" "}
                    (NSF DRL-1118664),{" "}
                    <a href="//scratchfoundation.org/">Scratch Foundation</a>,{" "}
                    <a href="//www.legofoundation.com/">LEGO Foundation</a>,{" "}
                    <a href="//www.btplc.com/">British Telecommunications</a>,
                    and Adobe Systems.
                </div>
                <div className="content-description-answer">
                    If you enjoy using this free app, please consider making a
                    donation to the Scratch Foundation (
                    <a href="//www.scratchfoundation.org">
                        www.scratchfoundation.org
                    </a>
                    ), a nonprofit organization that provides ongoing support
                    for ScratchJr. We appreciate donations of all sizes, large
                    and small.
                </div>
                <div className="content-description-answer">
                    <span>
                        Platinum supporters from the ScratchJr Kickstarter
                        campaign:
                    </span>{" "}
                    <span className="notranslate">
                        Jeremy Deutsch, Kenneth Ehlert, Catherine Greenspon,
                        Mark Loughridge, JoAnn Gantz Bendetson, and Shirley
                        Resnick.
                    </span>
                </div>

                <div className="content-description-answer">
                    <span>
                        Other supporters from the ScratchJr Kickstarter
                        campaign:
                    </span>
                    <span className="notranslate">
                        Aaron Suggs, Abe Stein, Abinash Bishoyi, Adam Bellow,
                        Adam Skylar Miner, Adriana Moscatelli, Adrienne Tilley,
                        Agnes Wagenh&auml;user Aidan Raney, Aiden &amp; Eryn
                        Murphy, Akim Boyko, Akinsola Akinbiyi, Alain-Christian,
                        Albert Oldfield, Alex Abdugafarov, Alexander &amp;
                        Edward Grabon, Alexander Falk, Alice Gamache, Alicia
                        Ca&ntilde;ellas Mayor, Alison &amp; Tyler Oakman, Al
                        Sweigart, Althea Champagnie, Amelia G. Kahler,
                        Am&eacute;lie Marian, Ana Aparecida Abrantes da Silva,
                        Anasol Pe&ntilde;a-Rios, Anastasia &amp; Guenevere
                        Miller, Anat Paskin-Cherniavsky, Anatole Debierre,
                        Andr&eacute; &quot;Takras&quot; Nordstrand, Andreas Elf,
                        Andreas Thaller, Andrew Morris, Andrew Reback, Andy
                        Gray, Andy Schmitz, Ann Chao, Ann Nicholson, Anna
                        Valderzalm, Annie Huddleston, Anthony Christopher
                        Vicari, Anthony Deighton, Ari Bader-Natal, Ariel Malka,
                        Ariel Segall, Arlin Maeve Jem, Armando Ricalde, Arnold
                        Abelman, Ash Wakeman, Asli Aydin, Astrid Jehg Giardino,
                        Ava Kuperman, Avery Heltsley, Axel Duerkop, Barbara
                        Reichart, Ben Plantinga, Ben Rugg, Benjamin Reynolds,
                        Benjohn Barnes, Berenice Chong, Besjan Xhika, Beth
                        McFadden Schilke, Beth Poss, Bex Tuchman, Bob Brinker,
                        Bodhi Verhaeghen, Brad Dickason, Brad Phillips, Brandon
                        Zylstra, Brevynn Marie Authement, Brian Sucer, Bryan
                        Hartman, Burrall Family, Caleb Gretz, Callan McCluskey,
                        Camille Teicheira, Carlos Ferreira, Carlos Ravelo,
                        Carmelo Presicce, Charlene Costello, Charles Goddard,
                        Charles Overy, Charles Wiles, Charlotte Pivot, Chloe
                        Ward, Chris Baum, Chris Swan, Chris Wolfe, Christian
                        Duckworth, Christian G. Panzer, Christian Printzell
                        Halvorsen, Christina Osieja, Christine Tempesta,
                        Christofer Bernander, Christoph Derndorfer, Christopher
                        Harris, Christy Heyob, Chuck Pickelhaupt, Cindy Alvarez,
                        Claudia Truesdell, Clement Chau, Colin J. White, Comrade
                        Alex, Craig Janis, Craig Lucci, Cristina Campos, Damon
                        May, Dan Callahan, Dan Hill, Dan Lowe, Dan Malec, Dan
                        Martines, Dan Salvucci, Dana Pavel, Dandelion
                        Collective, Daniel Barbosa, Daniel Moix, Daniel Rehn,
                        Daniella Jaeger, Daniella Latham, Danielle Feerst, Danil
                        Sokolov, Danny Dulak, Darragh J. Delany, Dave Haynes,
                        Dave Rapin, Dave Wolles, David Dorrier, David Mellis,
                        David Bonner, David Dance, David Drew, David Dufresne,
                        David Monreal i Prat, David Peter, David Schaub, David
                        Wilson, Deanna Stanley, Debbie Lai, Debbie Wizig, Derek
                        Sheen, Derry Lammerding, Diane Pierce Skinner, Diego
                        Diaz, Digital Dream Labs, Dmitry Kazantsev, Don McCurdy,
                        Donald Utley, Doug Morris, Steve Bunce, Dushyant Arora,
                        Dyah Purwati, Dylan Byth, Ed Robinson, Eelco Lempsink,
                        Eivind Melleby, Elise Lemle, Elizabeth Bagish, Emilio
                        Vacca, Emily Nikolaisen, Emma Healy, Emma &amp; Sasha
                        Telerant Blau, Eric Buess, Eric Elliott, Eric Henderson,
                        Eric Hoffman, Eric Novik, Eric Whittington, Erik Ashby,
                        Erik Goodlad, Erwin Mazariegos, Esben Collstrup, Espen
                        Lodden, Ethan Bauley, Evan Scruggs, Fabio Albanese,
                        Felici&aacute;n D&aacute;vid Nagy, Felipe Santi,
                        Finkelstein Family, Flavia Dyer, Frank &amp; Vik
                        Delporte, Frank Kam Lee, Frank Sperber, Gabriela
                        Richard, Gary Ball, Geoff Allmand, George V. Robinson,
                        Gerald Chao, German Bauer, Grace A. Thrasher, Gracie
                        Elqura, Graham Toal, Graham Wallis, Greg Linch,
                        Guillermo G. Espins, Hakan Atas, Hamish Grace, Hannah
                        Celeste Radunovich, Hans Petter Amundsen, Hartmuth
                        Gieldanowski, Harvey Brinda, Heinrich Langos, Helena
                        Rollins, Herv&eacute; Gallaire, Howard Ho, I.Z. aka
                        IDzeroNo, Ian Viemeister, Ilayda-Laurens-Oliver, Isao
                        Sonobe, Islam Youssef, Ivan Koldaev, Ivan Makfinsky, J.
                        Becket Linn, Jackson &amp; Jacob Malory, Jacky K.C Yau,
                        Jaka Mele, James Brophy, James Brown, James Coleman,
                        James Dellow, James Droskoski, James E. Pace, James
                        Evans, James McAllen III, Jan Bernatik, Jared Mortensen,
                        Jason A. Torres, Jason Ballard, Jason Ostrander, Jason
                        VanOrd &amp; Mai Thao Pham, Javed Hasnat, Jaynemarie
                        Lentlie, Jeanne &amp; Louise Delalonde, Jeff Gilfelt,
                        Jeff Magnusson, Jenn Hudak, Jennifer Leigh Allard, Jens
                        Woyke, Jeremy Cee, Jeremy Douglass, Jeremy Goldin, Jerry
                        Owens, Jess Ren&egrave; Hedegaard Gertsen, Jill
                        Truesdale, Jimba George, Joan Miquel Payeras
                        Cresp&iacute;, Joanna Doyle, Joe Jones, Joe Mills, Joe
                        Nachison, Joek van Montfort, Joel Grasmeyer, Joerg
                        Schwanke, Johann Stockinger, John C. Vivenzio, John
                        Hritz, John Moore, John Morrow, John P. Carr, John Scott
                        Tynes, John Sosoka, John Thurmond, John Umekubo, Johnny
                        Clark, Jon &amp; Susan, Jon Sj&ouml;din, Jonathan
                        Ferrell, Jonathan Hunt, Jonathan Marc Holtan, Jordan C.
                        Seidel, Jose Alberto Carcas Mullor, Jose Chitty, Jose
                        Julio Rodrigo, Jose Tijam, Josep Gabriel Cerd&agrave;
                        Ferr&agrave;ndiz, Joseph Civin, Joseph Cohen, Joseph
                        Giordano, Joseph Rork, Joshua Mack, Josh Paul, Josh
                        Renner, Josh Richau, Josh Thompson, Josiah Reynolds, J.
                        Shorr, Juan Antonio Casado, Julie West, Julie Wood,
                        Justin Carpenter, Justin Chines, Justin Ellis, Justin
                        Hamilton, Justin K Rising, Justin Chung, Kaia Dekker,
                        Kaisla Vuorinen, Kaloyan Raev, Kaman Cheung, Karina
                        Linch, Karla Brown, Karsten Gresch, Kasper Kamperman,
                        Kathryn Bryant, Katharine Pong, Katherine Senzee,
                        Kathrin Brogli, Katie Tekula, Kazuhiro Abe, Keawe
                        Maximillian Landgraf, Keith Lewis, Kendra J. Crawford,
                        Kenneth Sizer, Kevin Niemczyk, Kevin Nunnelly, Kevin Ye,
                        Kimberly McAfee, Kira Franz, Koidin Family , Kovelman
                        Family, Kris Hanks, Kristian Cibulskis, Kristiina Hurme,
                        Kristin Orwig, Krzysztof Czai&nacute;ski, Kurt Tholking,
                        Lara &amp; Martin Kastner, Larissa Swanland, Lasse
                        Schwarten, L&aacute;szl&oacute; Ag&aacute;rdi, Lauri
                        Ulm, Lee Tratnyek, Lefevre-Ardant Family, Leigh Klotz,
                        Liam Welsh, Liliana Reynoso, Lilliana Richter, Linda
                        George, Lindsey Blackman Shepard, Little British Robot
                        Company, Luca L&uuml;chinger, Lucien &amp; Amelia
                        Salinas, Luis Carbajosa, Lynn Roberts, Matt Senne, Magic
                        Light Show, Magnus Edvard Nielsen, Mai T. Vu, Marco
                        Vigelini, Margaret A. Staton, Marissa Mocenigo, Marius
                        Voskamp, Mark Best, Mark Budak, Mark Jaroski, Mark
                        Schroeder, Markus Gassenbauer, Markus Gerhard, Markus
                        Mohr, Marlene Getzendanner, Martin Darebn&yacute;,
                        Martin Dinov, Martin Pol&aacute;k, Martin Scherer, Mats
                        R&ouml;rbecker, Matt Sanda, Matt Anestis, Matt Shannon,
                        Matthew Boulay, Matthew Nohr, Matthew Peterson, Maui
                        McAdams, Maureen Tumenas, Mauricio Pontes, Max Lim,
                        Maxine-Antoine Nassim, Megan Myers, Megan Stetz, Melanie
                        Barker, Mete Akcaoglu, Michael Kyed, Michael MJ John,
                        Michael Smith, Michal Copko, Michelle Sharkey, Michi
                        Eder, Mike Grusell, Mike Renne, Mike Welsh, Mikey
                        Pechner, Miki Leskinen, Miklos Kozary, Milan Raj, Miles
                        Skorpen, Mohamed Shareef, Maldives, Moris Danon, Mudit
                        Dalmia, My New Enterprise, Myadiyev Family, Myra
                        Deister, Nanette Donohue, Natalie Freed, Nathan Battan,
                        Neil C.C. Brown, Neil Ferreri, Neville &amp; Julie Cook,
                        Nick Gleason, Nick Schneble, Nick Semenkovich, Nick, Sam
                        &amp; Jesse Corston, Nicolas Lobrot, Nicole Goddard,
                        Niels Huijbregts, Nigel P. Henderson, Nikolay Kolev,
                        Nina Nahyeon Shin, Olivier Dupont, Oren Pinsky, Orion
                        Reblitz-Richardson, Osman E-Baba, Owen Ashford,
                        Owen-Landon-Carson, &Oslash;yvind Selbek, Pablo Burgos,
                        Pari Lingampally, Patrick Bernhardt, Patrick Conway, Pau
                        C&oacute;rdoba, Paul A. Stancik, Paul Brody, Paul
                        Grasso, Paul Muston, Pepijn Kummel, Per Mosseby, Peter
                        Jaros, Pfautz Family, Philipp Thun, Philly Cashion,
                        Pierre Thienpont, PK Shiu, Polly Murray, Pontus
                        &quot;Ponni&quot; Nilsson, Rachel Lea Fox, Rahul
                        Walawalkar, Ramona Bernard, Randy Lynn, Rebecca
                        Hornstein Doede, Richard Monson-Haefel, Rick Anderson,
                        Rick Yvanovich, Rik Bennett, rkt88edmo, Rob Guth, Rob
                        MacAndrew, Robert Elek, Robert T. Williams Jr., Roger
                        Sodre, Ross Peyton, Rowan Elessar Moran, Russell S.
                        Ahlstrom, Ryan Finley, Ryan Grepper, Ryan Nellis, Sacha
                        Mallais, Sage Ross, Salvador, Samantha Packingham
                        Cornell, Sandor Weisz, Sanjay Khuttan, Sara Beshawred,
                        Sarah Faisal, Sarah Richards, Scarlett &amp; Magenta
                        Smith, Scott Manuel, Sean Chou, Sean McManus, Sebastian
                        Hudak, Seokjun Kim, Sergio Marco del Fresno, Sergio
                        Toporek, Servaas Vandecappelle, Shan Zhi Thi, Sharna
                        Jackson, Sharon Kinkead, Shelly &amp; Peter Murphy,
                        Shervyn von Hoerl, Shinichi Fujita, Shinji Niwa, Shruti
                        Maidam, Sid Meredith, Siddharth Saran, Simon Barrett,
                        Simon Dugard, Simon Plutz, Simon Wood, Sistemas
                        Electr&oacute;nicos, Sjoerd Dirk Meijer, Slavko Milekic,
                        Sofica Gonzalez, Sol &amp; Skyla Cannon, Sonya &amp;
                        Nikki Patel, Sophia &amp; Frances Ahern, Sophie
                        Mattholie, Stephen Powell, Stanislav Sinitsyn, Stanislav
                        Sultanov, Stella Zogopoulos Demis, Stephanie Grant,
                        Stephen Sanzo, Stephen Schug, Stephen York, Steve
                        Bagnall, Steve Dembo, Steve Lawton, Steven A. Hauck, Stu
                        Coates, Sunny Amies, Svend Andersen, Sverre Rabbelier,
                        Szescko Cyril, Tabatha DiDomenico, Taj &amp; Joseph
                        Chiu, Takatoshi Suenaga, Tammy Lee, Tanja Borzel, Tarmo
                        Protsin, Tauno Palts, Thomas Hessler, Thomas Schwarz,
                        Tiago C&eacute;sar Volpato Maluta, Tiffany daSilva,
                        Tobias Hartmann, Todd &amp; Monica Warnell, Todd Cowley,
                        Tom Broughton, Tom Plaskon, Tom Ricket, Tom Stacey, Tom
                        Wang, Toma&zcaron; Kocman, Tommy Casanova, Tommy
                        Falgout, Tomohiro Ueno, Tony Cheal, Torbjorn Skauli,
                        Trisha Callella, Tyler Reeves, Ulrich Tausend, Unmesh
                        Gundecha, Ureka Moore-Washington, Vadim Oss, Victor R.
                        Lee, Victoria Crespo Carballo, Victoria Vega, Ville
                        Caribas Lima de Medeiros, Vince Kim, Virginia Malanog,
                        Viviane Pretet, V.R. Bones, Andrew Walton, Wayne
                        Blackburn, Wendy E. Rowe, Will Ober, William
                        Bettridge-Radford, William Wnekowicz, Wincent Balin,
                        Xose P&eacute;rez, Yannick Methot, Yeou-Hsiang Cheng,
                        Yoojin Lim, Yoshihiro Kawahara, Yrjan Tangenes, Zachary
                        Kestenbaum, Zack Chapple, Z&eacute;bulon Grav&eacute;,
                        Zoe Franklyn, &amp; 141Learning.
                    </span>
                </div>
            </div>
        </div>
    </div>
);
export default InfoSection;
