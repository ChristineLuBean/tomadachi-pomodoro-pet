<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License: CC BY-NC-SA 4.0][by-nc-sa-license-shield]][by-nc-sa-license-url]
[![License: CC BY-NC-ND 4.0][by-nc-nd-license-shield]][by-nc-nd-license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <hgroup>
  <h1>TomaDachi: Your Pomodoro Virtual Pal</h1>
    <p>Stay productive, or your pet pays the price!</p>
  </hgroup>
</div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features/a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a>
            <ul>
              <li><a href="#installation-steps">Installation Steps</a></li>
              <li><a href="#Setting up MongoDB">Setting Up MongoDB</a></li>
            </ul>
        </li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributions">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

TomaDachi is a virtual pet that uses the Pomodoro technique to help you stay productive.

Pomodoro is a time-management technique in which you divide your work into 25-minute intervals separated by short breaks. During each interval, you focus on a single task without interruption.

TomaDachi takes it a step further. If you don't finish your Pomodoro sessions on time, your little pet will perish. That's right, it's not your little sister's virtual pet that you can just forget about. Your pet's health in TomaDachi is directly linked to your productivity. The more you focus, the happier and healthier your pet will be. But if you neglect your work, your pet's health will suffer until it eventually passes away and is laid to rest in the "TomaDachi Cemetery". So get to work and make sure your TomaDachi is happy and healthy!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## __Features__

* Pomodoro-based productivity: TomaDachi uses the Pomodoro technique to help you focus on your work by breaking it down into manageable 25-minute intervals.

* Virtual pet simulation: You'll take care of a virtual pet while working, and its health and happiness are directly tied to your productivity. If you don't complete your Pomodoro sessions, your pet's health will suffer and it may eventually pass away.

* Multiple pet options: You can choose from a variety of virtual pets to take care of, each with its own unique appearance and personality.

* Customizable work intervals and break times: You can adjust the length of your Pomodoro sessions and breaks to fit your work style and preferences.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## __Built With__

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![React][React]][React-url]
* [![Redux][Redux]][Redux-url]
* [![Passport][Passport]][Passport-url]
* [![Mongoose][Mongoose]][Mongoose-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Expressjs][Expressjs]][Expressjs-url]
* [![Vite][Vite]][Vite-url]
* [![Pixijs][Pixijs]][Pixijs-url]
* [![Styled-Components][Styled-Components]][Styled-Components-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## __Getting Started__

To get a local copy up and running follow these simple example steps.

### __Prerequisites__

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### __Installation__

To install TomaDachi, simply clone this repository and run npm install in both the client and server directories. Once the application is running, you can create a new account or log in with an existing account. From there, you can start using the Pomodoro technique to take care of your virtual pet.

#### __Installation Steps__

1. Clone the repo
  ```sh
  git clone https://github.com/ChristineLuBean/tomadachi-pomodoro-pet.git
  ```
2. Navigate to the project directory:
  ```sh
  cd tomadachi-pomodoro-pet
  ```
3. Install the dependencies for the client:
  ```sh
  cd client
  npm install
  ```
4. Install the dependencies for the server:
  ```sh
  cd ../server
  npm install
  ```
5. In the root directory of the project, create a .env file and add the following line (See [Setting up Mongo DB Section](#setting-up-mongodb)):
  ```
  MONGODB_URI=<your-mongodb-uri>
  ```
  Make sure to replace <your-mongodb-uri> with the URI for your MongoDB instance.
  ```6. To start the client and server at the same time, run:
  ```sh
  npm run start
  ```
  This will start the server and client concurrently, allowing you to view the app at http://localhost:3000.

  #### __Setting up MongoDB__

  1. Install MongoDB on your machine if you haven't already. You can download it from the official MongoDB website.
  2. Create a new MongoDB database and collection for your project.
  3. In your project directory, create a new .env file if you haven't already.
  4. Add the following line to your .env file:
  ```
  MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<database>
  ```
  5. Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database>` with the appropriate values for your MongoDB setup.
  
  For example:
  ```
  MONGODB_URI=mongodb://myuser:mypassword@localhost:27017/mydatabase
  ```

  Note: you can also use a MongoDB URI string that includes query parameters to specify additional options for your MongoDB connection. For more information, see the [MongoDB URI documentation](https://docs.mongodb.com/manual/reference/connection-string/).

  6. In your Node.js code, use the `MONGODB_URI` environment variable to connect to your MongoDB database. For example, using the mongoose library:
  ```js
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  ```
If you're using a different MongoDB driver or ORM, consult its documentation for information on how to connect to your database using environment variables.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES
## __Usage__

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

 -->

<!-- ROADMAP -->
## __Roadmap__

### Phase 1: Planning and Setup

- [x] Define the project's scope, objectives, and target audience.
- [x] Set up the development environment and version control system (e.g., Git).
- [x] Create a project plan with a timeline, milestones, and deliverables.

### Phase 2: Design and Prototyping

- [ ] Create wireframes or mockups of the TomaDachi virtual pet and its user interface.
- [ ] Design the Pomodoro timer and integrate it with the virtual pet's behavior and lifecycle.
- [ ] Develop a working prototype of the TomaDachi virtual pet with basic functionality.
- [ ] Test and refine the prototype to ensure it meets the project objectives.

### Phase 3: Development and Testing

- [ ] Develop the TomaDachi virtual pet's core functionality, including its behavior, interaction with the user, and Pomodoro timer integration.
- [ ] Implement features for tracking and managing productivity, such as task lists, progress bars, and statistics.
- [ ] Test and refine the prototype to ensure it meets the project objectives and user needs.

### Phase 4: Deployment and Maintenance

- [ ] Prepare the TomaDachi virtual pet for deployment to a production environment.
- [ ] Launch the TomaDachi virtual pet and monitor its performance, user feedback, and bug reports.
- [ ] Collect user feedback and use it to improve the TomaDachi virtual pet over time.
- [ ] Maintain and update the TomaDachi virtual pet regularly to fix bugs, add features, and keep it up to date.

### Version Version 1.0.0

- [ ] Basic Pomodoro timer functionality with customizable work and break intervals.
- [ ] Virtual pet creation and customization, including pet species, appearance, and name.
- [ ] Pet health and happiness tracking, including feeding, playing, and grooming needs.
- [ ] Pet mortality, where neglecting Pomodoro sessions or pet care leads to illness and death.
- [ ] Virtual graveyard for deceased pets.

## Future Improvements

- [ ] Pet accessories and items to purchase with virtual currency earned from completing Pomodoro sessions
- [ ] Interactive pet care: In addition to completing your Pomodoro sessions, you can interact with your pet by feeding, playing with, and caring for it to keep it healthy and happy.
- [ ] Achievements and rewards: As you complete your Pomodoro sessions and take care of your pet, you'll earn achievements and rewards to keep you motivated and engaged.
- [ ] Fun animations and sound effects: TomaDachi features cute and colorful animations and sound effects to make your work breaks more enjoyable.

See the [open issues](https://github.com/ChristineLuBean/tomadachi-pomodoro-pet/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## __Contributions__

Thanks for your interest in contributing to this project! At the moment, we are not accepting any contributions. However, we encourage you to check back in the future for any updates. We appreciate your support! If you have any feedback or suggestions, please feel free to open an issue.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## __License__

TomaDachi is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.

You are free to:

- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms:

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NonCommercial — You may not use the material for commercial purposes.
- ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

However, the art assets used in TomaDachi are not licensed under CC BY-NC-SA 4.0 and remain the sole property of the author. You may not use, distribute, or modify the art assets for any purpose without the explicit permission of the author.

Please refer to the `LICENSE.txt` file for the full text of the license.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## __Contact__

Christine LuBean - [@christinemlubean@infosec.exchange](https://infosec.exchange/@christinemlubean) - christinemlubean@gmail.com

Project Link: [https://github.com/ChristineLuBean/tomadachi-pomodoro-pet](https://github.com/ChristineLuBean/tomadachi-pomodoro-pet)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ## __Acknowledgments__

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/ChristineLuBean/tomadachi-pomodoro-pet?style=for-the-badge
[stars-url]: https://github.com/ChristineLuBean/virtual-pet-pomodoro/stargazers
[issues-shield]: https://img.shields.io/github/issues/ChristineLuBean/tomadachi-pomodoro-pet?style=for-the-badge
[issues-url]: https://github.com/ChristineLuBean/tomadachi-pomodoro-pet/issues
[by-nc-sa-license-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=for-the-badge&color=firebrick
[by-nc-sa-license-url]: https://creativecommons.org/licenses/by-nc-sa/4.0/
[by-nc-nd-license-shield]: https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg?style=for-the-badge&color=goldenrod
[by-nc-nd-license-url]: https://creativecommons.org/licenses/by-nc-nd/4.0/
[product-screenshot]: images/screenshot.png
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/Vite.js-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Pixijs]: https://img.shields.io/badge/Pixi.js-e72264?style=for-the-badge&logo=pixi.js&logoColor=white
[Pixijs-url]: https://pixijs.com/
[Redux]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://react-redux.js.org
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Passport]: https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white
[Passport-url]: https://www.passportjs.org
[Mongoose]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white
[Mongoose-url]: https://mongoosejs.com
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com
[Expressjs]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Expressjs-url]: https://expressjs.com/
[Styled-Components]: https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled-Components-url]: https://styled-components.com
