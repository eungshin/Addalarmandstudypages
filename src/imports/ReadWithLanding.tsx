import svgPaths from "./svg-e7lei7t2x7";
import imgMainImage1 from "figma:asset/202cd8afa1f03effb8b7c35cbbd9604c661075f8.png";
import img1 from "figma:asset/febd56776a1d095b10e4774abd0811c69e10a64f.png";
import imgImage1 from "figma:asset/16c9cd4d7eb28adfb8ab24c545290acbea91658c.png";
import imgGeneratedIllustration111 from "figma:asset/934206dd35fe4a90c88997f8dad982c08a9e4d08.png";

function Logo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Logo">
      <p className="font-['Cutive:Regular',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-gray-900 text-nowrap whitespace-pre">ReadWith</p>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="content-stretch flex font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium gap-[32px] items-center leading-[19.2px] not-italic relative shrink-0 text-[16px] text-gray-500 text-nowrap whitespace-pre" data-name="Nav Menu">
      <p className="relative shrink-0">기능</p>
      <p className="relative shrink-0">문의</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Navigation">
      <Logo />
      <NavMenu />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[80px] py-[20px] relative w-full">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function Sparkles() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Sparkles">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Sparkles">
          <g clipPath="url(#clip0_1_237)">
            <path d={svgPaths.p874e300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_237">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#fef3e2] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[16px] shrink-0" data-name="Badge">
      <Sparkles />
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">지금 개발 중, 미리 소식을 받아보세요</p>
    </div>
  );
}

function HeroText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-full" data-name="Hero Text">
      <p className="font-['Inter:Extra_Bold','Noto_Sans_KR:Black',sans-serif] font-extrabold leading-[62.4px] relative shrink-0 text-[48px] text-gray-900 w-full">원서 읽기 쉬워요.</p>
      <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-gray-500 w-full">
        <p className="leading-[27px] mb-0 text-[20px]">영어책, 논문 읽다가 단어에 가로 막혔던 경험, 누구에게나 있죠?</p>
        <p className="leading-[27px] text-[20px]">
          사전 앱, 번역기 왔다갔<span>{`다. `}</span>이제<span className="font-['Inter:Bold','Noto_Sans_KR:Regular',sans-serif] font-bold not-italic">{` ReadWith`}</span>
          <span>{`로 `}</span>
          <span>{`단어·의미·발음까지 `}</span>한 번에 해결해요.
        </p>
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Mail">
          <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-red-300 content-stretch flex gap-[8px] h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-[200px]" data-name="Primary Button">
      <Mail />
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">얼리 버드 신청</p>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Hero Actions">
      <PrimaryButton />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[900px]" data-name="Hero Content">
      <Badge />
      <HeroText />
      <HeroActions />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white h-[868px] relative shrink-0 w-full" data-name="Hero Section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] h-[868px] items-center pb-0 pt-[80px] px-[80px] relative w-full">
          <HeroContent />
          <div className="h-[459px] relative shrink-0 w-[874px]" data-name="main_image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMainImage1} />
          </div>
          <div className="h-[465px] relative shrink-0 w-[700px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Rectangle 2"></g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full" data-name="Section Header">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-red-600 w-full">기존 E-Book의 한계</p>
      <div className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[43.2px] relative shrink-0 text-[36px] text-gray-900 w-full">
        <p className="mb-0">영어 원서 읽기,</p>
        <p>왜 이렇게 어려울까요?</p>
      </div>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Header">
      <div className="h-[198px] relative shrink-0 w-[316px]" data-name="업스케일 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #DC2626)" />
          <path d="M21 21L16.66 16.66" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p19568f00} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-red-300 content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[60px]" data-name="Icon Container">
      <Search />
    </div>
  );
}

function ProblemContent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Problem Content">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] text-gray-900 w-full">사전 앱 왔다갔다</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-gray-500 w-full">모르는 단어 때문에 읽기가 중단되고, 사전 앱과 번역기를 오가며 집중력이 떨어져요.</p>
    </div>
  );
}

function Problem() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Problem 1">
      <IconContainer />
      <ProblemContent />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Clock">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #DC2626)" />
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 6V12L16 14" id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-red-300 content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[60px]" data-name="Icon Container">
      <Clock />
    </div>
  );
}

function ProblemContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Problem Content">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] text-gray-900 w-full">단어 암기의 어려움</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-gray-500 w-full">어렵게 찾은 단어도 시간이 지나면 까먹게 되고, 체계적인 복습이 힘들어요.</p>
    </div>
  );
}

function Problem1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Problem 2">
      <IconContainer1 />
      <ProblemContent1 />
    </div>
  );
}

function VolumeX() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Volume X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Volume X">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #DC2626)" />
          <path d={svgPaths.pe4afc00} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 9L16 15" id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 9L22 15" id="Vector_3" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-red-300 content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[60px]" data-name="Icon Container">
      <VolumeX />
    </div>
  );
}

function ProblemContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Problem Content">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] text-gray-900 w-full">발음 학습 부족</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-gray-500 w-full">읽기만 하다 보니 듣기와 말하기 실력은 늘지 않고, 실제 회화에서 막막해져요.</p>
    </div>
  );
}

function Problem2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[336px]" data-name="Problem 3">
      <IconContainer2 />
      <ProblemContent2 />
    </div>
  );
}

function ProblemsGrid() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Problems Grid">
      <Problem />
      <Problem1 />
      <Problem2 />
    </div>
  );
}

function ProblemSection() {
  return (
    <div className="bg-[#fff1df] h-[661px] relative shrink-0 w-full" data-name="Problem Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[13px] h-[661px] items-start pb-[80px] pt-[33px] px-[40px] relative w-full">
          <SectionHeader />
          <SectionHeader1 />
          <ProblemsGrid />
        </div>
      </div>
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full" data-name="Section Header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[24px] text-red-300 w-full">ReadWith</p>
      <div className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[43.2px] relative shrink-0 text-[36px] text-gray-900 w-full">
        <p className="mb-0">{`진짜 '읽기→암기→말하기' 루프를`}</p>
        <p>한 번의 클릭으로 완성하세요</p>
      </div>
    </div>
  );
}

function FeatureBadge() {
  return (
    <div className="bg-indigo-100 box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[16px] shrink-0" data-name="Feature Badge">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[14px] text-indigo-500 text-nowrap whitespace-pre">WordSpy 기능</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #22C55E)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Benefit() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Benefit 1">
      <Check />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-700 text-nowrap whitespace-pre">앱 전환 없이 매끄러운 읽기</p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #22C55E)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Benefit1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Benefit 3">
      <Check1 />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-700 text-nowrap whitespace-pre">한국어 or 영어 원하는 언어로 풀이 제공</p>
    </div>
  );
}

function FeatureBenefits() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Benefits">
      <Benefit />
      <Benefit1 />
    </div>
  );
}

function FeatureContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[480px]" data-name="Feature Content">
      <FeatureBadge />
      <div className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[41.6px] min-w-full not-italic relative shrink-0 text-[32px] text-gray-900 w-[min-content]">
        <p className="mb-0">{`어려운 단어 `}</p>
        <p>{`마법 처럼 쉬운 풀이가 떠요 `}</p>
      </div>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-gray-500 w-[min-content]">PDF·EPUB 등 다양한 포맷의 내 파일에서, 어려운 단어에 자동으로 힌트가 표시되고, 클릭 한 번으로 뜻·발음·예문까지 한 번에!</p>
      <FeatureBenefits />
    </div>
  );
}

function Content() {
  return (
    <div className="h-[294px] relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[294px] items-start p-[16px] relative w-full">
          <div className="aspect-[805/513] relative shrink-0 w-full" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[294px] items-start relative rounded-[24px] shrink-0 w-[418px]" data-name="Phone Mockup">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Content />
    </div>
  );
}

function FeatureVisual() {
  return (
    <div className="bg-[#fef3e2] content-stretch flex flex-col h-[320px] items-center justify-center relative rounded-[16px] shrink-0 w-[480px]" data-name="Feature Visual">
      <PhoneMockup />
    </div>
  );
}

function Feature() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Feature 1">
      <FeatureContent />
      <FeatureVisual />
    </div>
  );
}

function PlayerHeader() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Player Header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-gray-900">Chapter 1</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[14px] text-gray-500">12:34 / 45:67</p>
    </div>
  );
}

function Waveform() {
  return (
    <div className="bg-[#7ca8ff] content-stretch flex h-[40px] items-start relative rounded-[4px] shrink-0 w-[252px]" data-name="Waveform">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-center text-white tracking-[-0.63px] w-[354px]">
        <p className="leading-[39px]">68%</p>
      </div>
    </div>
  );
}

function Waveform1() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col h-[40px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Waveform">
      <Waveform />
    </div>
  );
}

function SkipBack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Skip Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Skip Back">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #6B7280)" />
          <path d="M19 20L9 12L19 4V20Z" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 19V5" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Play">
          <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p262abc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function PlayButton() {
  return (
    <div className="bg-indigo-500 content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[48px]" data-name="Play Button">
      <Play />
    </div>
  );
}

function SkipForward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Skip Forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Skip Forward">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #6B7280)" />
          <path d="M5 4L15 12L5 20V4Z" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 5V19" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Controls">
      <SkipBack />
      <PlayButton />
      <SkipForward />
    </div>
  );
}

function AudioPlayer() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-[200px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[400px]" data-name="Audio Player">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <PlayerHeader />
      <Waveform1 />
      <Controls />
    </div>
  );
}

function FeatureVisual1() {
  return (
    <div className="bg-[#fef3e2] content-stretch flex flex-col h-[320px] items-center justify-center relative rounded-[16px] shrink-0 w-[480px]" data-name="Feature Visual 2">
      <AudioPlayer />
    </div>
  );
}

function FeatureBadge1() {
  return (
    <div className="bg-emerald-50 box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[16px] shrink-0" data-name="Feature Badge 2">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[14px] text-green-500 text-nowrap whitespace-pre">오디오북 자동 생성</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #22C55E)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Benefit5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Benefit 3">
      <Check2 />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-700 text-nowrap whitespace-pre">문장별 정확한 싱크</p>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #22C55E)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Benefit2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Benefit 4">
      <Check3 />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-700 text-nowrap whitespace-pre">속도 조절 가능 (0.5x~1.5x)</p>
    </div>
  );
}

function FeatureBenefits1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Benefits 2">
      <Benefit5 />
      <Benefit2 />
    </div>
  );
}

function FeatureContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[480px]" data-name="Feature Content 2">
      <FeatureBadge1 />
      <div className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[41.6px] min-w-full not-italic relative shrink-0 text-[32px] text-gray-900 w-[min-content]">
        <p className="mb-0">내 전자책이 즉시</p>
        <p>고품질 오디오북으로</p>
      </div>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-gray-500 w-[min-content]">EPUB 파일을 업로드하면 문장 단위로 싱크되는 TTS 오디오북을 자동 생성. 어떤 책이든 자유롭게 오디오북으로!</p>
      <FeatureBenefits1 />
    </div>
  );
}

function Feature1() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Feature 2">
      <FeatureVisual1 />
      <FeatureContent1 />
    </div>
  );
}

function FeatureBadge2() {
  return (
    <div className="bg-[#fef3e2] box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[16px] shrink-0" data-name="Feature Badge 3">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[14px] text-amber-500 text-nowrap whitespace-pre">자동 SRS 복습</p>
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #22C55E)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Benefit3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Benefit 5">
      <Check4 />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-700 text-nowrap whitespace-pre">원문 문장이 포함된 카드</p>
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #22C55E)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Benefit4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Benefit 6">
      <Check5 />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-700 text-nowrap whitespace-pre">과학적인 반복 학습 시스템</p>
    </div>
  );
}

function FeatureBenefits2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Benefits 3">
      <Benefit3 />
      <Benefit4 />
    </div>
  );
}

function FeatureContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[480px]" data-name="Feature Content 3">
      <FeatureBadge2 />
      <div className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[41.6px] min-w-full not-italic relative shrink-0 text-[32px] text-gray-900 w-[min-content]">
        <p className="mb-0">저장한 단어는</p>
        <p>알아서 반복 학습</p>
      </div>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-gray-500 w-[min-content]">읽기 중 저장한 단어가 자동으로 플래시카드가 되고, 3/7/14일 주기로 복습 알림. 장기 기억까지 완벽하게!</p>
      <FeatureBenefits2 />
    </div>
  );
}

function Divider() {
  return <div className="bg-gray-200 h-px shrink-0 w-full" data-name="Divider" />;
}

function Waveform2() {
  return <div className="bg-white h-[38px] rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[269px]" data-name="Waveform" />;
}

function CardActions() {
  return <div className="h-[32px] shrink-0 w-full" data-name="Card Actions" />;
}

function Flashcard() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[13px] h-[293px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[320px]" data-name="Flashcard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[20px] text-center text-gray-900 w-[min-content]">melancholy</p>
      <Divider />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-gray-500 w-full">She felt melancholy as she walked through the empty streets.</p>
      {[...Array(3).keys()].map((_, i) => (
        <Waveform2 key={i} />
      ))}
      <CardActions />
    </div>
  );
}

function FeatureVisual2() {
  return (
    <div className="bg-[#fef3e2] content-stretch flex flex-col h-[320px] items-center justify-center relative rounded-[16px] shrink-0 w-[480px]" data-name="Feature Visual 3">
      <Flashcard />
    </div>
  );
}

function Feature2() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Feature 3">
      <FeatureContent2 />
      <FeatureVisual2 />
    </div>
  );
}

function FeatureVisual3() {
  return (
    <div className="bg-[#fef3e2] content-stretch flex flex-col h-[320px] items-center justify-center relative rounded-[16px] shrink-0 w-[480px]" data-name="Feature Visual 2">
      <div className="aspect-[1024/584] relative shrink-0 w-full" data-name="generated-illustration-1 (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeneratedIllustration111} />
      </div>
    </div>
  );
}

function FeatureBadge3() {
  return (
    <div className="bg-emerald-50 box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-0 relative rounded-[16px] shrink-0" data-name="Feature Badge 2">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[14px] text-green-500 text-nowrap whitespace-pre">나만의 오디오북</p>
    </div>
  );
}

function Check6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #22C55E)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Benefit6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Benefit 3">
      <Check6 />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-700 text-nowrap whitespace-pre">{`타인에게 공유하기 `}</p>
    </div>
  );
}

function Check7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #22C55E)" />
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Benefit7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Benefit 4">
      <Check7 />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-700 text-nowrap whitespace-pre">{`문장,문단, 페이지 별로 나눠서 녹음하기 `}</p>
    </div>
  );
}

function FeatureBenefits3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Benefits 2">
      <Benefit6 />
      <Benefit7 />
    </div>
  );
}

function FeatureContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[480px]" data-name="Feature Content 2">
      <FeatureBadge3 />
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[41.6px] min-w-full not-italic relative shrink-0 text-[32px] text-gray-900 w-[min-content]">
        내 목소리로 직접
        <br aria-hidden="true" />
        오디오북을 만들어요
      </p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-gray-500 w-[min-content]">
        {`발표 준비, 영어 쉐도잉 연습이 필요 하세요? `}
        <br aria-hidden="true" />
        {`텍스트에 맞춰서 내 목소리를 녹음하고 오디오북으로 만들어보세요 `}
      </p>
      <FeatureBenefits3 />
    </div>
  );
}

function Feature3() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Feature 4">
      <FeatureVisual3 />
      <FeatureContent3 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Features">
      <Feature />
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </div>
  );
}

function SolutionSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Solution Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start pb-[80px] pt-[52px] px-[80px] relative w-full">
          <SectionHeader2 />
          <Features />
        </div>
      </div>
    </div>
  );
}

function Benefit8() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Benefit 3" />;
}

function BenefitsList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Benefits List">
      <Benefit8 />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[56px] items-center px-[20px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[19.2px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-400">이메일 주소를 입력하세요</p>
        </div>
      </div>
    </div>
  );
}

function SubmitFinal() {
  return (
    <div className="bg-[#fff000] content-stretch flex h-[56px] items-center justify-center relative rounded-[12px] shrink-0 w-full" data-name="Submit Final">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[19.2px] not-italic relative shrink-0 text-[16px] text-gray-800 text-nowrap whitespace-pre">지금 등록하기</p>
    </div>
  );
}

function FinalForm() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[450px]" data-name="Final Form">
      <EmailInput />
      <SubmitFinal />
    </div>
  );
}

function CtaContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[700px]" data-name="CTA Content">
      <div className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[46.8px] min-w-full not-italic relative shrink-0 text-[36px] text-center text-white w-[min-content]">
        <p className="mb-0">지금 이메일을 등록하고</p>
        <p>소식을 받아보세요!</p>
      </div>
      <BenefitsList />
      <FinalForm />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] min-w-full not-italic relative shrink-0 text-[12px] text-center text-indigo-200 w-[min-content]">* 이메일은 안전하게 관리되며, 언제든 구독 해지 가능합니다.</p>
    </div>
  );
}

function FinalCtaSection() {
  return (
    <div className="bg-gray-900 relative shrink-0 w-full" data-name="Final CTA Section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center p-[80px] relative w-full">
          <CtaContent />
        </div>
      </div>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Footer Logo">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">ReadWith</p>
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="Company Info">
      <FooterLogo />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[14px] text-gray-400 w-[min-content]">혁신적인 언어학습 도구로 더 나은 학습 경험을 만들어가요.</p>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Contact Info">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[16px] text-white">문의사항</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[14px] text-gray-400">whathow.studio@gmail.com</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[14.4px] relative shrink-0 text-[12px] text-gray-400">서비스 관련 문의는 이메일로 연락주세요</p>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Footer Content">
      <CompanyInfo />
      <ContactInfo />
    </div>
  );
}

function Divider1() {
  return <div className="bg-gray-700 h-px shrink-0 w-full" data-name="Divider" />;
}

function Mail1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Mail">
          <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, #9CA3AF)" />
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Github">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Github">
          <path d="M20 20H0V0H20V20Z" stroke="var(--stroke-0, #9CA3AF)" />
          <path d={svgPaths.pbf3e180} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p5272800} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Social Links">
      <Mail1 />
      <Github />
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Copyright">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[14px] text-gray-400 text-nowrap whitespace-pre">© 2024 ReadWith. All rights reserved.</p>
      <SocialLinks />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gray-900 relative shrink-0 w-full" data-name="Footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[80px] py-[48px] relative w-full">
          <FooterContent />
          <Divider1 />
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default function ReadWithLanding() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="ReadWith Landing">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}