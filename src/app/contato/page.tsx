import { Button } from "@/components/ui/button"
import { PhoneCall, UserCircleIcon } from "lucide-react"
import { Box } from "../components/box/Box"

export default function Example() {
  return (
    <form>
      <div className="space-y-12">
        <Box className="m-2 p-3 border border-white/10  bg-zinc-800 rounded-md">
          <div className="border-b border-gray-900/10 dark:border-gray-300/20 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900 dark:text-gray-100">Perfil</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-100">
            Essas informações serão exibidas publicamente, portanto, tome cuidado com o que você compartilha.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Usuário:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
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

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Sobre:
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-100"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-100">Escreva algumas frases sobre você.</p>
            </div>

            <Box className="m-2 p-3 border border-white/10  bg-zinc-900 rounded-md col-span-full">
              {/* <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                foto:
              </label> */}
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className=" text-gray-300" aria-hidden="true" size={78}/>
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Alterar
                </button>
              </div>
            </Box>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Foto de capa
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 dark:border-gray-100">
                <div className="text-center">
                  <PhoneCall className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-100" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600 items-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white dark:bg-indigo-600 dark:p-1 font-semibold text-indigo-600 dark:text-gray-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Enviar um arquivo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1 dark:text-gray-100">ou arraste e solte</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600 dark:text-gray-100">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Box>

        <Box className="m-2 p-3 border border-white/10  bg-zinc-800 rounded-md">
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-100"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                E-email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-100"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:text-gray-100"
                >
                  <option>Estados Unidos</option>
                  <option>Canadá</option>
                  <option>México</option>
                  <option>Brasil</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                endereço da Rua
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full dark:text-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  className="block w-full rounded-md border-0 py-1.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        </Box>

        <Box className="m-2 p-3 border border-white/10  bg-zinc-800 rounded-md">
          <div className="border-b border-gray-900/10 dark:border-gray-300/20 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">Notificações</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-100">
            Bem, sempre avisaremos sobre mudanças importantes, mas você escolhe o que mais deseja ouvir.
          </p>
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Por email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:text-gray-100"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900 dark:text-gray-100">
                      Comentários
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">Seja notificado quando alguém postar um comentário em uma postagem.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:text-gray-100"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900 dark:text-gray-100">
                      Candidatos
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">Seja notificado quando um candidato se candidatar a um emprego.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:text-gray-100"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900 dark:text-gray-100">
                      Ofertas
                    </label>
                    <p className="text-gray-500 dark:text-gray-400 ">Seja notificado quando um candidato aceitar ou rejeitar uma oferta.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Notificações via push</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-100">Estes são entregues via SMS para o seu telemóvel.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:text-gray-100"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Tudo
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:text-gray-100"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                    O mesmo que e-mail                  
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:text-gray-100"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Sem notificações push                  
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        </Box>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-3">
        <Button variant={"destructive"} type="button">Cancelar</Button>
        <Button variant={"default"} type="submit">Salvar</Button>
      </div>
    </form>
  )
}
