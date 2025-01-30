import { useState, useEffect, useCallback } from "react";

function SentimentoDeMercado() {
  const [criptomoedaNome, setCriptomoedaNome] = useState(""); // Nome visível no input
  const [criptomoedaSimbolo, setCriptomoedaSimbolo] = useState(""); // Símbolo enviado no formulário
  const [filteredList, setFilteredList] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const criptomoedas = [
    { nome: "Bitcoin", simbolo: "bitcoin" },
    { nome: "Ethereum", simbolo: "ethereum" },
    { nome: "Ripple", simbolo: "ripple" },
    { nome: "Solana", simbolo: "solana" },
    // adicione suas criptomoedas aqui
  ];

  // Função para debounce, reduzindo chamadas excessivas durante a digitação
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleInputChange = useCallback(
    debounce((value) => {
      if (value.trim() === "") {
        setFilteredList([]);
        setIsDropdownVisible(false);
      } else {
        const filtered = criptomoedas.filter((item) =>
          item.nome.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredList(filtered);
        setIsDropdownVisible(true);
      }
    }, 100),
    []
  );

  const onInputChange = (e) => {
    const value = e.target.value;
    setCriptomoedaNome(value); // Atualiza o nome visível
    setCriptomoedaSimbolo(""); // Reseta o símbolo quando o usuário digita
    handleInputChange(value);
  };

  const handleOptionClick = (nome, simbolo) => {
    setCriptomoedaNome(nome); // Define o nome visível no input
    setCriptomoedaSimbolo(simbolo); // Armazena o símbolo para envio
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    if (criptomoedaNome.trim() === "") {
      setFilteredList([]);
      setIsDropdownVisible(false);
    }
  }, [criptomoedaNome]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você terá o criptomoedaSimbolo como o valor a ser enviado
    console.log("Enviando símbolo:", criptomoedaSimbolo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-12 col-sm-6 col-xl-12">
        <div className="mb-4">
          <h5 className="mb-2 text-body-highlight">Criptomoeda</h5>
          <div className="dropdown">
            <input
              className="form-control mb-xl-3"
              type="text"
              placeholder="Pesquise uma criptomoeda"
              value={criptomoedaNome}
              onChange={onInputChange}
              onFocus={() => setIsDropdownVisible(true)}
            />
            {isDropdownVisible && (
              <ul className="dropdown-menu w-100 show">
                {filteredList.length > 0 ? (
                  filteredList.map((item, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href="#!"
                        onClick={() => handleOptionClick(item.nome, item.simbolo)}
                      >
                        {item.nome}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a className="dropdown-item" href="#!">
                      Nenhuma correspondência
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default SentimentoDeMercado;