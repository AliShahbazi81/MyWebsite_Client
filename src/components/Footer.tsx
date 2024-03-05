import "./../app/css/footer.scss"
import ReferenceCard from "@/components/reference/ReferenceCard";
import SocialLinks from "@/components/reference/SocialLinks";
import {Trans, useTranslation} from "next-i18next";
import React from "react";

export default function Footer() {
	const {t} = useTranslation('common');
	return (
		<div className={'footerEnv'}>
			<div className={'footer'}>
				{/* Social links and icons */}
				<div className={'socialEnv'}>
					<h3 className={'socialExplanation'}>
						{t('footerSocialDescription')}
					</h3>
					{/* Icons */}
					<div id={"contact"} className={'socialIconsEnv'}>
						<SocialLinks imageName={"EmailLogo"}  socialLink={"mailto:alishahbazi799@gmail.com"} />
						<SocialLinks imageName={"GitHubLogo"}  socialLink={"https://github.com/AliShahbazi81"}/>
						<SocialLinks imageName={"InstagramLogo"}  socialLink={"https://www.instagram.com/ali_shahbazi81/"}/>
						<SocialLinks imageName={"LinkedInLogo"}  socialLink={"https://www.linkedin.com/in/alishahbazi81/"}/>
						<SocialLinks imageName={"TelegramLogo"}  socialLink={"https://t.me/AliShahbazi81"}/>
					</div>
					<div className={'copyRight'}>
						<h3 className={'copyRightText'}>
							<Trans
								i18nKey={'footerCopyRightYear'}
								components={{
									1: <span className="text-primary"><b/></span>,
								}} />
						</h3>
						<h3 className={'copyRightText'}>
							{t('footerCopyRightText')}
						</h3>
					</div>
				</div>
				{/* References */}
				<div className={'reference'}>
					<div className={'referenceEnv'}>
						<ReferenceCard
							profImageUrl={"ProfMahdiFiroozjaei"}
							profName={"Prof. Mahdi Firoozjaei"}
							profRole={t('footerReferenceMahdiFiroozjaeiPosition')}
							profText={t('footerReferenceMahdiFiroozjaei')}
							profUniversity={"University of Windsor"}
							profLinkedInUrl={"https://www.linkedin.com/in/mahdi-d-firoozjaei-85b58a42/"}/>
						<ReferenceCard
							profImageUrl={"ProfUsamaMir"}
							profName={"Prof. Usama Mir"}
							profRole={t('footerReferenceUsamaMirPosition')}
							profText={t('footerReferenceUsamaMir')}
							profUniversity={"University of Windsor"}
							profLinkedInUrl={"https://www.linkedin.com/in/usama-mir-phd-0892932b/"}/>
					</div>
					<div className={'referenceEnv'}>
						<ReferenceCard
							profImageUrl={"AtefehGilvari"}
							profName={"Atefeh Gilvari"}
							profRole={t('footerReferenceAtefehGilvariPosition')}
							profText={t('footerReferenceAtefehGilvari')}
							profUniversity={"University of Windsor"}
							profLinkedInUrl={"https://www.linkedin.com/in/atefeh-gilvari-122a76256/"}/>
						<ReferenceCard
							profImageUrl={"ArashShabbeh"}
							profName={"Arash Shabbeh"}
							profRole={t('footerReferenceArashShabbehPosition')}
							profText={t('footerReferenceArashShabbeh')}
							profUniversity={""}
							profLinkedInUrl={"https://www.linkedin.com/in/arash-shabbeh/"}/>
					</div>
				</div>
			</div>
			
		</div>
	)
}