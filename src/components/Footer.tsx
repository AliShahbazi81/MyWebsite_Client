import "./../app/css/footer.scss"
import ReferenceCard from "@/components/reference/ReferenceCart";

export default function Footer()
{
	return(
		<div className={'footerEnv'}>
			{/* Social links and icons */}
			<div className={'socialEnv'}>
				<p>Hey there</p>
			</div>
			{/* References */}
			<div className={'referenceEnv'}>
				<ReferenceCard profImageUrl={"ProfMahdiFiroozjaei"} profName={"Prof. Mahdi Firoozjaei"} profRole={"Professor"} profText={"Reference Text test"} profUniversity={"University of Windsor"} />
				<ReferenceCard profImageUrl={"ProfUsamaMir"} profName={"Prof. Usama Mir"} profRole={"Professor"} profText={"Reference Text Test"} profUniversity={"University of Windsor"} />
			</div>
		</div>
	)
}