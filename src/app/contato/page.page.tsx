import { UserCircleIcon } from "lucide-react"
import { Box } from "../components/box/Box"

export default function Contato() {
  return (
    <form>
      <div className="space-y-12">
        <Box className="m-2 p-3 border border-white/10  dark:bg-zinc-900 bg-gray-50 shadow-sm rounded-md">
          <div className="border-b border-gray-900/10 dark:border-gray-300/20 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900 dark:text-gray-100">Perfil</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-100">
            Essas informações serão exibidas publicamente, portanto, tome cuidado com o que você compartilha.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4 flex justify-between items-center">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Usuário:
                </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300/30 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm dark:text-gray-100">workcation.com/</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
              </div>
              <div>
                <UserCircleIcon className=" text-gray-300" aria-hidden="true" size={78}/>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Sobre:
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-100"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-100">Escreva algumas frases sobre você.</p>
            </div>
          </div>
        </div>
        </Box>

        <Box className="m-2 p-3 border border-white/10  dark:bg-zinc-900 bg-gray-50 shadow-sm rounded-md">
          <div className="border-b border-gray-900/10 dark:border-gray-300/20 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">Informações pessoais</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-100">Use um endereço permanente onde você possa receber correspondências.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                primeiro nome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                sobrenome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                País
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:text-gray-100"
                >
                  <option>Estados Unidos</option>
                  <option>Canadá</option>
                  <option>México</option>
                  <option>Brasil</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Cidade
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Estado/Província
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                CEP / Código Postal
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        </Box>
      </div>
    </form>
  )
}
