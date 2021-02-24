# material-ui-forms
![npm](https://img.shields.io/npm/v/material-ui-forms)
[![npm](https://img.shields.io/npm/dw/material-ui-forms)][npm-url]
[![GitHub repo size][github-repo-size]][github-url]
[![npm bundle size][npm-bundle-size]][npm-url]
[![GitHub top language][github-top-language-shield]][github-url]
![npm](https://img.shields.io/npm/l/material-ui-forms)

## Peer Dependencies
![npm peer dependency version](https://img.shields.io/npm/dependency-version/material-ui-forms/peer/react)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/material-ui-forms/peer/@material-ui/core)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/material-ui-forms/peer/@material-ui/icons)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/material-ui-forms/peer/@material-ui/lab)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/material-ui-forms/peer/react-to-print)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/material-ui-forms/peer/next)

## Dependencies
![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/material-ui-forms/crypto-js)

- [material-ui-forms](#material-ui-forms)
  - [Peer Dependencies](#peer-dependencies)
  - [Dependencies](#dependencies)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)




## About The Project
This projects goal is to make using material-ui to create webforms easy, fast, and fully featured. The features include: 
* The ability to add locks to the form without much effort. Use case being role management, content management or similar.
* The ability to save user progress, using local storage, allowing for a quick return.
* The ability to print the forms with automatic page breaks conveniencing both the developer and end user.
* Generic typeing to reduce coupling between form logic and controllers (api calls).
* Simplification of complex components such as AutoComplete to reduce the amount of configuration is basic use cases.
* Compiling helper functions, option lists, and hooks commonly used in material UI forms.
* ...more descriptions in future releases


### Built With
* [React](https://reactjs.org/)
* [Material UI](https://material-ui.com)
* [NextJs](https://nextjs.org/)
* [CryptoJS](https://www.npmjs.com/package/crypto-js)
* [TypeScript](https://www.typescriptlang.org/)
* [React to Print](https://www.npmjs.com/package/react-to-print)


## Getting Started
To get started you'll need to [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html).
I recommend using TypeScript to take full advantage of the types and interfaces defined in material-ui-forms but, it's not neccessary.
For TypeScript create a project [--template typescript](https://create-react-app.dev/docs/adding-typescript).


### Prerequisites
This project is still in development and requires the following peer dependencies to use.
  ```json
  "@material-ui/core": "^4.11.0",
  "@material-ui/icons": "^4.9.1",
  "@material-ui/lab": "^4.0.0-alpha.56",
  "react": "^16.13.1",
  "react-dom": "^17.0.1",
  "react-to-print": "^2.11.0",
  "next": "^9.5.5"
  ```
The next (NextJs) dependency will be removed in a future release to allow developers to specify their router.


### Installation
  ```sh
  npm install material-ui-forms
  ```


## Usage
_Coming Soon: For more examples, please refer to the [Documentation](https://github.com/N-ickJones/material-ui-forms/examples)_


## Roadmap
See the [open issues][github-issues-url] for a list of proposed features (and known issues).


## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/HelpfulFeature`)
3. Commit your Changes (`git commit -m 'Add a HelpfulFeature'`)
4. Push to the Branch (`git push origin feature/HelpfulFeature`)
5. Open a Pull Request


## License
Distributed under the MIT License. See [License](https://en.wikipedia.org/wiki/MIT_License) for more information.


## Contact
* Name: Nicholas Jones
* [Github](https://github.com/N-ickJones)
* [LinkedIn](https://www.linkedin.com/in/nicholas-jones-bb2581a1/)
* [StackOverFlow](https://stackoverflow.com/users/story/9173346)


## Acknowledgements
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [Font Awesome](https://fontawesome.com)


<!-- SHIELDS -->
[github-top-language-shield]: https://img.shields.io/github/languages/top/N-ickJones/material-ui-forms
[npm-bundle-size]: https://img.shields.io/bundlephobia/min/material-ui-forms
[github-repo-size]: https://img.shields.io/github/repo-size/N-ickJones/material-ui-forms


<!-- URLs -->
[github-url]: https://github.com/N-ickJones/material-ui-forms
[github-issues-url]: https://github.com/N-ickJones/material-ui-forms/issues
[npm-url]: https://www.npmjs.com/package/material-ui-forms
