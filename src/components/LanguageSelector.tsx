import React, {useState} from 'react';
import './../app/css/languageSelector.scss';
import {useRouter} from "next/navigation";
import Link from "next/link";

type Language = {
	  code: string;
	  name: string;
	  flagUrl: string;
};

export default function LanguageSelector() {
	  const router = useRouter();
	  const [languages] = useState<Language[]>([
			{code: 'en', name: 'English', flagUrl: '/images/lang/English.png'},
			{code: 'de', name: 'German', flagUrl: '/images/lang/Germany.png'},
	  ]);
	  const [isOpen, setIsOpen] = useState(false);
	  return (
			<div className={'languageSelector'} onClick={() => setIsOpen(!isOpen)}>
				  <img src={languages.find(l => l.code === router.locale)?.flagUrl || '/images/lang/English.png'} alt="Current Language"/>
				  {isOpen && (
						<ul className={'languageList'}>
							  {languages.map((language) => (
									<li key={language.code}>
										  {/* Adjust the navigation strategy to fit your application's routing and locale handling */}
										  <Link href={`/${language.code}`} scroll={false}>
												<span
													  onClick={() => setIsOpen(false)}
												>
													  <img src={language.flagUrl} alt={language.name}/>
												</span>
										  </Link>
									</li>
							  ))}
						</ul>
				  )}
			</div>
	  );
}