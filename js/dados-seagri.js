// Fonte única de dados SEAGRI — pessoas, matrículas e histórico
// Substitui pessoas.js e o mapa MATRICULAS inline do organograma.html

const SEAGRI_PESSOAS=[
  // Secretaria
  {id:"sec",    setor:"Secretária",                                      nome:"Temyllis Lima da Silva",     grupo:"Secretaria",       kind:"secretaria",          matricula:""},
  {id:"secad",  setor:"Secretário Adjunto",                              nome:"Edivan Maciel",              grupo:"Secretaria",       kind:"secretaria-adjunta",  matricula:""},
  {id:"gab",    setor:"Gabinete da Secretária",                          nome:"Francisco Diego",            grupo:"Secretaria",       kind:"assessoria",          matricula:"9610286-3"},
  {id:"gabsecad",setor:"Gabinete do Secretário Adjunto",                 nome:"Josilda Lima",               grupo:"Secretaria",       kind:"assessoria",          matricula:"9592083-2"},
  {id:"ci",     setor:"Controle Interno",                                nome:"Lilian Vitoria",             grupo:"Secretaria",       kind:"assessoria",          matricula:"9557385-3"},
  {id:"conjur", setor:"Consultoria Jurídica",                            nome:"Thais Ferreira",             grupo:"Secretaria",       kind:"assessoria",          matricula:"9595716-2"},
  {id:"ascom",  setor:"Assessoria de Comunicação",                       nome:"Dionisio Neto",              grupo:"Secretaria",       kind:"assessoria",          matricula:"9206370-3"},
  {id:"ouvid",  setor:"Ouvidoria",                                       nome:"Maria Socorro",              grupo:"Secretaria",       kind:"assessoria",          matricula:"9507540-2"},
  {id:"cppas",  setor:"Comissão Permanente de Processo Administrativo Sancionador", nome:"Marina Farias de Albuquerque", grupo:"Secretaria", kind:"comissao",            matricula:"9329650-1"},
  // DAF
  {id:"daf",    setor:"Diretoria de Administração e Finanças",           nome:"Nivia Cristina",             grupo:"DAF",              kind:"diretoria",           matricula:""},
  {id:"del",    setor:"Departamento de Escritórios Locais",              nome:"Jorge Ney Pontes",           grupo:"DAF",              kind:"departamento",        matricula:"9470700-3"},
  {id:"deg",    setor:"Departamento de Gestão",                          nome:"Mayssa Diniz",               grupo:"DAF",              kind:"departamento",        matricula:"9608990-1"},
  {id:"deplan", setor:"Departamento de Planejamento",                    nome:"Natalia Cristina",           grupo:"DAF",              kind:"departamento",        matricula:"9095012-5"},
  {id:"deof",   setor:"Departamento de Orçamento e Finanças",            nome:"Heloneyda Marques",          grupo:"DAF",              kind:"departamento",        matricula:"9072837-11"},
  {id:"disg",   setor:"Divisão de Serviços Gerais",                      nome:"Renata Carvalho",            grupo:"DAF",              kind:"divisao",             matricula:"9610944-2"},
  {id:"dipm",   setor:"Divisão de Patrimônio e Materiais",               nome:"Rosimeire Cavalcante",       grupo:"DAF",              kind:"divisao",             matricula:"73725-1"},
  {id:"diarp",  setor:"Divisão de Arquivo e Protocolo",                  nome:"Maria do Socorro",           grupo:"DAF",              kind:"divisao",             matricula:""},
  {id:"dirh",   setor:"Divisão de Recursos Humanos",                     nome:"Marcleide Tavares",          grupo:"DAF",              kind:"divisao",             matricula:"212598-1"},
  {id:"dit",    setor:"Divisão de Transporte",                           nome:"Pedro Alencar",              grupo:"DAF",              kind:"divisao",             matricula:""},
  {id:"dimt",   setor:"Divisão de Modernização Tecnológica",             nome:"Luan Dourado",               grupo:"DAF",              kind:"divisao",             matricula:"9617973-2"},
  {id:"dicompras",setor:"Divisão de Licitações, Compras e Contratos",    nome:"João Paulo",                 grupo:"DAF",              kind:"divisao",             matricula:"9128123-5"},
  {id:"dicon",  setor:"Divisão de Convênios",                            nome:"Pâmela Galvão",              grupo:"DAF",              kind:"divisao",             matricula:"9572350-4"},
  {id:"dipro",  setor:"Divisão de Programas",                            nome:"Marcos Santana",             grupo:"DAF",              kind:"divisao",             matricula:"9683477-1"},
  {id:"dimon",  setor:"Divisão de Monitoramento",                        nome:"Éllen Abud",                 grupo:"DAF",              kind:"divisao",             matricula:"9332154-1"},
  {id:"dif",    setor:"Divisão de Finanças",                             nome:"Karin Gomes",                grupo:"DAF",              kind:"divisao",             matricula:"9612114-4"},
  {id:"dic",    setor:"Divisão de Contabilidade",                        nome:"Camila Arruda",              grupo:"DAF",              kind:"divisao",             matricula:"9572350-4"},
  // DPA
  {id:"dpa",    setor:"Diretoria de Produção e Agronegócio",             nome:"Cláudio Malveira",           grupo:"DPA",              kind:"diretoria",           matricula:""},
  {id:"desan",  setor:"Departamento Socioprodutivo e Segurança Alimentar",nome:"Igor Honorato",             grupo:"DPA",              kind:"departamento",        matricula:"9348476-1"},
  {id:"deagro", setor:"Departamento de Agronegócio",                     nome:"Jalceyr Pessoa",             grupo:"DPA",              kind:"departamento",        matricula:"9353720-1"},
  {id:"deprof", setor:"Departamento de Produção Familiar",               nome:"Josicley Azevedo",           grupo:"DPA",              kind:"departamento",        matricula:"9094393-3"},
  {id:"dem",    setor:"Departamento de Mecanização",                     nome:"Richarler Aguiar",           grupo:"DPA",              kind:"departamento",        matricula:"9610499-3"},
  {id:"diis",   setor:"Divisão de Inclusão Socioprodutiva",              nome:"Ariane Gadelha",             grupo:"DPA",              kind:"divisao",             matricula:"9508643-3"},
  {id:"disan",  setor:"Divisão de Segurança Alimentar",                  nome:"Marcela",                    grupo:"DPA",              kind:"divisao",             matricula:"9310690-2"},
  {id:"dia",    setor:"Divisão de Agricultura",                          nome:"Nilton Cesar",               grupo:"DPA",              kind:"divisao",             matricula:"9249362-2"},
  {id:"dipec",  setor:"Divisão de Pecuária",                             nome:"Willian Junis",              grupo:"DPA",              kind:"divisao",             matricula:""},
  {id:"divpi",  setor:"Divisão de Produção Indígena",                    nome:"Adriano Dias",               grupo:"DPA",              kind:"divisao",             matricula:""},
  {id:"divpf",  setor:"Divisão de Produção Familiar",                    nome:"Wally Stanley",              grupo:"DPA",              kind:"divisao",             matricula:"9109595-4"},
  {id:"disbio", setor:"Divisão de Sociobiodiversidade",                  nome:"Eneide Thaumaturgo",         grupo:"DPA",              kind:"divisao",             matricula:"9182152-3"},
  {id:"nap",    setor:"Núcleo de Apoio Logístico",                       nome:"Antônio José",               grupo:"DPA",              kind:"nucleo",              matricula:"201278-1"},
  {id:"ncaf",   setor:"Núcleo de Cadastro da Agricultura Familiar",       nome:"Conceição",                  grupo:"DPA",              kind:"nucleo",              matricula:"291978-1"},
  {id:"npolo",  setor:"Núcleo de Polos Agroflorestais",                  nome:"Carlos Antonio",             grupo:"DPA",              kind:"nucleo",              matricula:"150304-1"},
  {id:"npaa",   setor:"Núcleo do Programa de Aquisição de Alimentos",    nome:"Claiton",                    grupo:"DPA",              kind:"nucleo",              matricula:"9353674-1"},
  {id:"npaai",  setor:"Núcleo do Programa de Aquisição de Alimentos Indígena",nome:"José Paulo",            grupo:"DPA",              kind:"nucleo",              matricula:"9111476-2"},
  {id:"npaaex", setor:"Núcleo do Programa de Aquisição de Alimentos Extrativista",nome:"Yanná",             grupo:"DPA",              kind:"nucleo",              matricula:"9626867-2"},
  {id:"nucaf",  setor:"Núcleo do Café",                                  nome:"Michelma Silva",             grupo:"DPA",              kind:"nucleo",              matricula:"9312480-2"},
  {id:"nuars",  setor:"Núcleo de Armazenamento e Silos",                 nome:"Nilton César",               grupo:"DPA",              kind:"nucleo",              matricula:"9249362-2"},
  {id:"nuapes", setor:"Núcleo de Aquicultura e Pesca",                   nome:"Wallace Santos",             grupo:"DPA",              kind:"nucleo",              matricula:"9213317-1"},
  {id:"nuav",   setor:"Núcleo da Avicultura",                            nome:"Bruna Diogo",                grupo:"DPA",              kind:"nucleo",              matricula:"9626816-1"},
  {id:"nuspi",  setor:"Núcleo Socioprodutivo Indígena",                  nome:"Hidelk Farias",              grupo:"DPA",              kind:"nucleo",              matricula:"9098879-9"},
  {id:"nucac",  setor:"Núcleo do Cacau",                                 nome:"Marcos Rocha",               grupo:"DPA",              kind:"nucleo",              matricula:"9628576-1"},
  {id:"numel",  setor:"Núcleo do Mel",                                   nome:"Rubia Mara",                 grupo:"DPA",              kind:"nucleo",              matricula:"9086870-6"},
  {id:"numan",  setor:"Núcleo da Mandioca",                              nome:"Murilo Matos",               grupo:"DPA",              kind:"nucleo",              matricula:"265101-2"},
  {id:"nuole",  setor:"Núcleo da Olericultura",                          nome:"Adriana Melo",               grupo:"DPA",              kind:"nucleo",              matricula:"9610936-3"},
  {id:"nuex",   setor:"Núcleo de Extrativismo",                          nome:"Angelina Lima",              grupo:"DPA",              kind:"nucleo",              matricula:"71153-1"},
  // DPTEC
  {id:"dptec",  setor:"Diretoria de Pesquisa, Tecnologia e Inovação do Agronegócio",nome:"Thiago de Almeida",grupo:"DPTEC",           kind:"diretoria",           matricula:""},
  {id:"det",    setor:"Departamento de Tecnologia",                      nome:"Luan Sobral",                grupo:"DPTEC",            kind:"departamento",        matricula:"9617973-2"},
  {id:"depi",   setor:"Departamento de Pesquisa e Inovação",             nome:"Roger Recco",                grupo:"DPTEC",            kind:"departamento",        matricula:"9213880-1"},
  {id:"digt",   setor:"Divisão de Geoprocessamento e Telemetria",        nome:"Izaura Cardoso",             grupo:"DPTEC",            kind:"divisao",             matricula:"9189599-9"},
  {id:"disoft", setor:"Divisão de Sistema de Informação",                nome:"Gabriane Vaz",               grupo:"DPTEC",            kind:"divisao",             matricula:"9617230-1"},
  {id:"ditt",   setor:"Divisão de Transferência de Tecnologia",          nome:"Ediu Carlos",                grupo:"DPTEC",            kind:"divisao",             matricula:"9683836-1"},
  {id:"dipa",   setor:"Divisão de Pesquisa Agropecuária",                nome:"Marcos Vinicius",            grupo:"DPTEC",            kind:"divisao",             matricula:"9683477-1"},
  {id:"dicp",   setor:"Divisão de Certificação de Produtos",             nome:"Yanná Thaumaturgo",          grupo:"DPTEC",            kind:"divisao",             matricula:"9626867-2"},
  // Escritórios Locais
  {id:"el-acld",setor:"Escritório Local de Acrelândia",                  nome:"Max Teodoro",                grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9407456-4"},
  {id:"el-abl", setor:"Escritório Local de Assis Brasil",                nome:"Wilker Nazareno",            grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-bli", setor:"Escritório Local de Brasiléia",                   nome:"Antônio Francisco",          grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-bjri",setor:"Escritório Local de Bujari",                      nome:"Luciano Queiroz",            grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9624643-2"},
  {id:"el-cpxb",setor:"Escritório Local de Capixaba",                    nome:"Kemy Fernandes",             grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-czs", setor:"Escritório Local de Cruzeiro do Sul",             nome:"Marcos Pereira",             grupo:"Escritórios Locais",kind:"escritorio",         matricula:"189391-2"},
  {id:"el-ept", setor:"Escritório Local de Epitaciolândia",              nome:"Jose Menezes",               grupo:"Escritórios Locais",kind:"escritorio",         matricula:"263176-3"},
  {id:"el-fjo", setor:"Escritório Local de Feijó",                       nome:"João Paulo",                 grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9304762-2"},
  {id:"el-pdht",setor:"Escritório Local do Humaitá",                     nome:"Wilson Brito",               grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9102337-8"},
  {id:"el-joao",setor:"Escritório Local de Jordão",                      nome:"Cintia Araujo",              grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9470271-3"},
  {id:"el-mli", setor:"Escritório Local de Mâncio Lima",                 nome:"Magno Corrêa",               grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-mlu", setor:"Escritório Local de Manoel Urbano",               nome:"Denes Bruno",                grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9334947-3"},
  {id:"el-mlto",setor:"Escritório Local de Marechal Thaumaturgo",        nome:"Laires Azevedo",             grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9334866-2"},
  {id:"el-poac",setor:"Escritório Local de Porto Acre",                  nome:"Wilson de Brito",            grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9102337-8"},
  {id:"el-pcy", setor:"Escritório Local de Plácido de Castro",           nome:"Antonio Pinto",              grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9235701-5"},
  {id:"el-pwtr",setor:"Escritório Local de Porto Walter",                nome:"Eriânio Melo",               grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-rbo", setor:"Escritório Local de Rio Branco",                  nome:"Risomar Freire",             grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-srju",setor:"Escritório Local de Santa Rosa do Purus",         nome:"Lugma Fernanda",             grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-smd", setor:"Escritório Local de Sena Madureira",              nome:"Adoneyson Campos",           grupo:"Escritórios Locais",kind:"escritorio",         matricula:"9437509-3"},
  {id:"el-swd", setor:"Escritório Local de Senador Guiomard",            nome:"Carlos Casas",               grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-tau", setor:"Escritório Local de Tarauacá",                    nome:"Leocélia Monteiro",          grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-trcr",setor:"Escritório Local da Transacreana",                nome:"Lucas Paiva",                grupo:"Escritórios Locais",kind:"escritorio",         matricula:""},
  {id:"el-xpi", setor:"Escritório Local de Xapuri",                      nome:"Antonio Alves",              grupo:"Escritórios Locais",kind:"escritorio",         matricula:""}
];

// Mapa derivado: id → matrícula (para uso direto no organograma)
const MATRICULAS=Object.fromEntries(SEAGRI_PESSOAS.map(p=>[p.id,p.matricula]));

// Histórico de responsáveis por setor (mais recente primeiro)
// Cada entrada: {nome, portaria, ano}  — adicionar quando conhecido
const HISTORICO={
  "cppas":[
    {nome:"Marina Farias de Albuquerque", portaria:"226/2025", ano:2025},
  ],
  "gab":[
    {nome:"Francisco Diego",  portaria:"25/2026",  ano:2026},
  ],
  "gabsecad":[
    {nome:"Josilda Lima",     portaria:"214/2023", ano:2023},
  ],
  "conjur":[
    {nome:"Thais Ferreira",   portaria:"35/2023",  ano:2023},
  ],
  "ascom":[
    {nome:"Dionisio Neto",    portaria:"192/2026", ano:2026},
  ],
  "deg":[
    {nome:"Mayssa Diniz",     portaria:"83/2026",  ano:2026},
  ],
  "deplan":[
    {nome:"Natalia Cristina", portaria:"60/2025",  ano:2025},
  ],
  "deof":[
    {nome:"Heloneyda Marques",portaria:"193/2026", ano:2026},
  ],
  "disg":[
    {nome:"Renata Carvalho",  portaria:"151/2025", ano:2025},
  ],
  "dimt":[
    {nome:"Luan Dourado",     portaria:"216/2026", ano:2026},
  ],
  "dicompras":[
    {nome:"João Paulo",       portaria:"30/2026",  ano:2026},
  ],
  "dicon":[
    {nome:"Pâmela Galvão",    portaria:"19/2025",  ano:2025},
  ],
  "dipro":[
    {nome:"Marcos Santana",   portaria:"217/2026", ano:2026},
  ],
  "dif":[
    {nome:"Karin Gomes",      portaria:"194/2026", ano:2026},
  ],
  "dic":[
    {nome:"Camila Arruda",    portaria:"195/2026", ano:2026},
  ],
  "desan":[
    {nome:"Igor Honorato",    portaria:"196/2026", ano:2026},
  ],
  "deagro":[
    {nome:"Jalceyr Pessoa",   portaria:"94/2023",  ano:2023},
  ],
  "deprof":[
    {nome:"Josicley Azevedo", portaria:"244/2026", ano:2026},
  ],
  "dem":[
    {nome:"Richarler Aguiar", portaria:"124/2024", ano:2024},
  ],
  "diis":[
    {nome:"Ariane Gadelha",   portaria:"197/2026", ano:2026},
  ],
  "disan":[
    {nome:"Marcela",          portaria:"201/2026", ano:2026},
  ],
  "dia":[
    {nome:"Nilton Cesar",     portaria:"207/2026", ano:2026},
  ],
  "det":[
    {nome:"Luan Sobral",      portaria:"216/2026", ano:2026},
  ],
  "depi":[
    {nome:"Roger Recco",      portaria:"53/2025",  ano:2025},
  ],
  "digt":[
    {nome:"Izaura Cardoso",   portaria:"218/2026", ano:2026},
  ],
  "disoft":[
    {nome:"Gabriane Vaz",     portaria:"219/2026", ano:2026},
  ],
  "ditt":[
    {nome:"Ediu Carlos",      portaria:"220/2026", ano:2026},
  ],
  "dipa":[
    {nome:"Marcos Vinicius",  portaria:"217/2026", ano:2026},
  ],
  "dicp":[
    {nome:"Yanná Thaumaturgo",portaria:"205/2026", ano:2026},
  ],
  "el-acld":[
    {nome:"Max Teodoro",      portaria:"298/2025", ano:2025},
  ],
  "el-bjri":[
    {nome:"Luciano Queiroz",  portaria:"86/2025",  ano:2025},
  ],
  "el-czs":[
    {nome:"Marcos Pereira",   portaria:"136/2023", ano:2023},
  ],
  "el-ept":[
    {nome:"Jose Menezes",     portaria:"138/2023", ano:2023},
  ],
  "el-fjo":[
    {nome:"João Paulo",       portaria:"134/2023", ano:2023},
  ],
  "el-pdht":[
    {nome:"Wilson Brito",     portaria:"30/2025",  ano:2025},
  ],
  "el-mlu":[
    {nome:"Denes Bruno",      portaria:"175/2023", ano:2023},
  ],
  "el-mlto":[
    {nome:"Laires Azevedo",   portaria:"290/2025", ano:2025},
  ],
  "el-pcy":[
    {nome:"Antonio Pinto",    portaria:"101/2025", ano:2025},
  ],
  "el-srju":[
    {nome:"Lugma Fernanda",   portaria:"181/2026", ano:2026},
  ],
  "el-smd":[
    {nome:"Adoneyson Campos", portaria:"118/2024", ano:2024},
  ],
  "el-swd":[
    {nome:"Carlos Casas",     portaria:"269/2025", ano:2025},
  ],
  "el-tau":[
    {nome:"Leocélia Monteiro",portaria:"141/2026", ano:2026},
  ],
  "el-trcr":[
    {nome:"Lucas Paiva",      portaria:"180/2023", ano:2023},
  ],
  "el-xpi":[
    {nome:"Antonio Alves",    portaria:"32/2025",  ano:2025},
  ],
  "el-mli":[
    {nome:"Magno Corrêa",     portaria:"177/2024", ano:2024},
  ],
  "el-pwtr":[
    {nome:"Eriânio Melo",     portaria:"255/2024", ano:2024},
  ],
  "el-cpxb":[
    {nome:"Kemy Fernandes",   portaria:"329/2024", ano:2024},
  ],
  "el-poac":[
    {nome:"Wilson de Brito",  portaria:"191/2023", ano:2023},
  ],
  "el-abl":[
    {nome:"Wilker Nazareno",  portaria:"187/2023", ano:2023},
  ],
  "el-joao":[
    {nome:"Cintia Araujo",    portaria:"127/2026", ano:2026},
  ],
  "el-bli":[
    {nome:"Antônio Francisco",portaria:"153/2023", ano:2023},
  ],
};
