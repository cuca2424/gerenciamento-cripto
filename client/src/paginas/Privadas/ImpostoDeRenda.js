import AporteSaldo from "../../componentes/Dashboard/AporteSaldo/AporteSaldo";
import Informativo1 from "../../componentes/Dashboard/Informativo1";

function ImpostoDeRenda() {
    return(
      <div class="col-12">
        <div class="row altura">
          <div className="col-12 col-md-6 bg-white h-50">
              <AporteSaldo />
          </div>
          <div className="col-12 col-md-6 bg-white h-50">
              <Informativo1 aportes={56} saldo={67} lucro={77} lucroPorcentil={2}/>
          </div>
          <div className="col-12 col-md-6 bg-white h-50">
              <Informativo1 aportes={56} saldo={67} lucro={77} lucroPorcentil={2}/>
          </div>
          <div className="col-12 col-md-6 bg-white h-50">
              <Informativo1 aportes={56} saldo={67} lucro={77} lucroPorcentil={2}/>
          </div>
        </div>
      </div>
    )
}

export default ImpostoDeRenda