function ProjectIcons({ icon }) {
  const skillsIcons = {
    react: {
      iconName: 'React',
      iconImg: './resources/images/react.png',
    },
    tailwind: {
      iconName: 'Tailwind',
      iconImg: './resources/images/tailwind.png',
    },
    nodejs: {
      iconName: 'Node.js',
      iconImg: './resources/images/nodejs.png',
    },
    express: {
      iconName: 'Express',
      iconImg: './resources/images/express.png',
    },
    openAI: {
      iconName: 'OpenAI',
      iconImg: './resources/images/OpenAI.png',
    },
    gitHub: {
      iconName: 'GitHub',
      iconImg: './resources/images/GitHub.png',
    },
    mongoDB: {
      iconName: 'MongoDB',
      iconImg: './resources/images/MongoDB.png',
    },
    framerMotion: {
      iconName: 'Framer Motion',
      iconImg: './resources/images/Framer-Motion.png',
    },
    socket: {
      iconName: 'Socket.io',
      iconImg: './resources/images/Socket.io.png',
    },
    JWTAuth: {
      iconName: 'JWT Auth',
      iconImg: './resources/images/JWT-Auth.png',
    },
    gitHubActions: {
      iconName: 'GitHub Actions API',
      iconImg: './resources/images/GitHub-Actions.png',
    },
    docker: {
      iconName: 'Docker',
      iconImg: './resources/images/Docker.png',
    },
    vite: {
      iconName: 'Vite',
      iconImg: './resources/images/vite.png',
    },
    gitHubOAuth: {
      iconName: 'GitHub OAuth',
      iconImg: './resources/images/gitHubOAuth.png',
    },
  };

  const tool = skillsIcons[icon];

  return (
    <div className="m-3 flex flex-col flex-wrap items-center justify-center text-center">
      <img
        className="h-30 w-auto object-contain"
        src={tool.iconImg}
        alt={tool.iconName}
      />
      <h1 className="font-aeonik pt-3 font-normal text-black">
        {tool.iconName}
      </h1>
    </div>
  );
}

export default ProjectIcons;
