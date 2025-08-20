export const myProjects = [
    {
    id: 1,
    title: "Trabalho de Conclusão de Curso",
    description:
      "Este é o meu TCC intitulado Modelagem e Simulação de Corpos e Tecidos Deformáveis em Motores de Jogos.",
    subDescription: [
      "Durante um ano eu estudei a base matemática complexa para chegar aos resultados apresentados e fazer a comparação entre engines e motores de física.",
      "Essa é uma pesquisa teórica e prática sobre corpos deformáveis."
    ],
    href: "https://github.com/matheusnajal/Depths-of-the-Mind",
    logo: "",
    image: `${import.meta.env.BASE_URL}/assets/projects/TCC.png`,
    tags: [
      {
        id: 1,
        name: "Godot",
        path: `${import.meta.env.BASE_URL}/assets/logos/godot.svg`,
      },
      {
        id: 2,
        name: "Unity",
        path: `${import.meta.env.BASE_URL}/assets/logos/unity.svg`,
      },
      {
        id: 3,
        name: "Unreal Engine",
        path: `${import.meta.env.BASE_URL}/assets/logos/UnrealEngine.svg`,
      },
      {
        id: 4,
        name: "PhysX",
        path: `${import.meta.env.BASE_URL}/assets/logos/PhysX.png`,
      },
      {
        id: 5,
        name: "Bullet Physics",
        path: `${import.meta.env.BASE_URL}/assets/logos/bullet.png`,
      },
    ],
  },
  {
    id: 2,
    title: "Depths of the Mind",
    description:
      "Este é o meu jogo desenvolvido em Godot para o curso de Computação Gráfica e Realidade Virtual da universidade.",
    subDescription: [
      "Depths of the Mind busca criar uma experiência imersiva, colocando o jogador no papel de uma pessoa que passa por um surto de esquizofrenia.",
      "A narrativa foca em explorar a perspectiva do protagonista e os desafios enfrentados durante o surto, além de oferecer opções de como lidar com a situação."
    ],
    href: "https://github.com/matheusnajal/Depths-of-the-Mind",
    logo: "",
    image: `${import.meta.env.BASE_URL}/assets/projects/Depths_of_the_mind.png`,
    tags: [
      {
        id: 1,
        name: "Godot",
        path: `${import.meta.env.BASE_URL}/assets/logos/godot.svg`,
      },
    ],
  },
    {
    id: 3,
    title: "Dashboard Streamlit",
    description:
      "Esse repositório é um estudo da biblioteca Streamlit do Python para projetos futuros.",
    subDescription: [
      "Este projeto é um Dashboard de Vendas Interativo desenvolvido com Streamlit, utilizando Pandas para manipulação de dados e Plotly para visualizações interativas."
    ],
    href: "https://github.com/matheusnajal/Dashboard-Streamlit",
    logo: "",
    image: `${import.meta.env.BASE_URL}/assets/projects/Dashboard-Streamlit.png`,
    tags: [
      {
        id: 1,
        name: "Python",
        path: `${import.meta.env.BASE_URL}/assets/logos/python.svg`,
      },
      {
        id: 2,
        name: "Streamlit",
        path: `${import.meta.env.BASE_URL}/assets/logos/Streamlit.svg`,
      },
      {
        id: 3,
        name: "Pandas",
        path: `${import.meta.env.BASE_URL}/assets/logos/pandas.svg`,
      },
                  {
        id: 4,
        name: "Plotly",
        path: `${import.meta.env.BASE_URL}/assets/logos/Ploty.svg`,
      },
    ],
  },

  
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+5585991202020",
    icon: `${import.meta.env.BASE_URL}assets/socials/whatsApp.svg`,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/matheus-najal-cruz/",
    icon: `${import.meta.env.BASE_URL}assets/socials/linkedIn.svg`,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/matheusnajal/",
    icon: `${import.meta.env.BASE_URL}assets/socials/instagram.svg`,
  },
];

export const experiences = [
  {
    title: "Bacharelado em Ciências da Computação",
    job: "Universidade de Fortaleza",
    date: "2022-2025",
    contents: [
      "Atualmente na fase final do Bacharelado em Ciências da Computação, com conclusão prevista para o final de 2025.",
      "Desenvolvendo ativamente o Trabalho de Conclusão de Curso em Computação Gráfica e contribuindo com pesquisa na mesma área como aluno de iniciação científica.",
      "Busco aplicar o conhecimento adquirido em grupos de estudo e na academia, com o objetivo de iniciar o mestrado em 2026 para aprofundar minha especialização."
    ],
  },
  {
    title: "Grupo de Estudo",
    job: "Programação Competitiva (GPC)",
    date: "2024",
    contents: [
      "Durante o ano de 2024, dediquei-me ao Grupo de Programação Competitiva (GPC), onde fortaleci intensivamente minhas habilidades em algoritmos, estruturas de dados e lógica de programação.",
      "Com foco na Maratona de Programação, implementei centenas de soluções para problemas, utilizando primariamente C, C++, Java, Python, JavaScript, além de explorar linguagens como Clojure e C#"
    ],
  },
  {
    title: "Grupo de Estudo",
    job: "Machine Learning Avançado / Deep Learning",
    date: "2025-Present",
    contents: [
      "Selecionado para o Grupo de Estudos em Inteligência Artifical (GEIA), com atuação na trilha de Machine Learning (1º semestre/2025) e Deep Learning (2º semestre/2025).",
      "Desenvolvi uma base técnica sólida em algoritmos de classificação e ensemble, desde KNN e Decision Tree até métodos mais avançados como AdaBoost e Gradient Boosting."
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];