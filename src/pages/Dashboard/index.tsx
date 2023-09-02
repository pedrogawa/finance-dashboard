import { FaRegUser } from "react-icons/fa";
import Card from "../../components/Card";

export default function Dashboard() {
  return (
    <div className="flex bg-primary w-screen h-screen">
      <div className="flex items-center justify-start bg-[#0c1425] p-6">
        Sidebar
      </div>
      <div className="flex flex-col w-full overflow-auto">
        <div className="flex sticky top-0 items-end justify-end bg-[#0e1726] py-3 px-10">
          <div className="bg-gray-500 p-2 rounded-full">
            <FaRegUser />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 p-8">
          <div className="flex flex-col gap-10 w-full">
            <div className="flex w-full justify-between items-center gap-8 max-[991px]:flex-col">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="w-full bg-[#0e1726] p-4 overflow-auto rounded-md">
              <table className="w-full">
                <thead className="bg-[#323e6c] rounded-lg">
                  <tr>
                    <th className="p-3 text-start rounded-l-md rtl:rounded-r-md">
                      DATA
                    </th>
                    <th className="text-start">NOME</th>
                    <th className="text-start">VALOR</th>
                    <th className="text-start ltr:rounded-r-md rtl:rounded-l-md">
                      TIPO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">02/09/2023</td>
                    <td>Jogo na Steam</td>
                    <td>R$ 32,94</td>
                    <td>GASTO</td>
                  </tr>
                  <tr>
                    <td className="p-3">02/09/2023</td>
                    <td>Jogo na Steam</td>
                    <td>R$ 32,94</td>
                    <td>GASTO</td>
                  </tr>
                  <tr>
                    <td className="p-3">02/09/2023</td>
                    <td>Jogo na Steam</td>
                    <td>R$ 32,94</td>
                    <td>GASTO</td>
                  </tr>
                  <tr>
                    <td className="p-3">02/09/2023</td>
                    <td>Jogo na Steam</td>
                    <td>R$ 32,94</td>
                    <td>GASTO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
