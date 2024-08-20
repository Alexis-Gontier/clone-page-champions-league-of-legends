import Link from "next/link"

export default function FooterBaner() {
  return (
    <div className="bg-bg_prefooter p-4 flex flex-col lg:flex-row justify-center items-center gap-8">
        <a
            href="https://www.leagueoflegends.com/fr-fr/how-to-play/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[#f9f9f9] font-semibold text-sm hover:bg-[#808080] hover:rounded-xl py-2 px-4"
        >
            à propos de league of legends
        </a>
        <a
            href="http://leagueoflegends.eu-surveyfr2.sgizmo.com/s3/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[#f9f9f9] font-semibold text-sm hover:bg-[#808080] hover:rounded-xl py-2 px-4"
        >
            aidez-nous à améliorer
        </a>
        <a
            href="https://status.riotgames.com/?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[#f9f9f9] font-semibold text-sm hover:bg-[#808080] hover:rounded-xl py-2 px-4"
        >
            état du service
        </a>
        <a
            href="https://support.riotgames.com/hc/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[#f9f9f9] font-semibold text-sm hover:bg-[#808080] hover:rounded-xl py-2 px-4"
        >
            Support
        </a>
        <a
            href="https://lolesports.com/fr-FR/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[#f9f9f9] font-semibold text-sm hover:bg-[#808080] hover:rounded-xl py-2 px-4"
        >
            site e-sport pro
        </a>
        <a
            href="https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[#f9f9f9] font-semibold text-sm hover:bg-[#808080] hover:rounded-xl py-2 px-4"
        >
            télécharger l'appli compagnon riot mobile
        </a>
    </div>
  )
}
