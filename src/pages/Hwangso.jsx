import React from 'react';
import {
    Zap,
    BookOpen,
    Target,
    CheckCircle2,
    ArrowRight,
    Star,
    ShieldCheck,
    ClipboardCheck,
    Trophy,
    Lightbulb,
    HelpCircle,
    UserCheck,
    ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const content = {
    prep: {
        title: "입학/편입 대비",
        icon: <Zap className="w-5 h-5" />,
        desc: "최상위권의 관문인 '생각하는 황소' 입학시험 및 편입시험을 위한 정밀 대비반입니다.",
        items: [
            {
                title: "입학시험 대비 (예비초3, 4)",
                desc: "현 2, 3학년 대상. 총 30문항(2.7점 12문항, 3.4점 10문항, 4.2점 8문항)의 시험 구조를 완벽 분석하여 고배점 문항 공략에 집중합니다.",
                points: ["높은 점수의 문제(4.2점) 획득 전략 훈련", "풀이과정 부분점수 없음 (정답 적중 중요)", "30문항 제한 시간 내 풀이 연습"]
            },
            {
                title: "편입시험 대비 (전 학년)",
                desc: "불시에 진행되는 편입 시험에 대비하여 상시적인 심화 실력을 유지합니다.",
                points: ["고난도 문제 해결 능력 배양", "황소 입학용 자체 모의고사 제공", "부족한 단원 집중 보완"]
            }
        ]
    },

    methods: {
        title: "준비 과정 & 교재",
        icon: <BookOpen className="w-5 h-5" />,
        desc: "황소 입학시험은 단순한 선행을 넘어선 심화 사고력을 요구합니다. 독수리수학은 체계적인 교재 라인업과 훈련법으로 합격률을 높입니다.",
        preparation: [
            {
                title: "필즈수학 (초급)",
                desc: "황소수학 입학시험 대비 문제집으로 가장 기본이 되는 사고력 교재입니다.",
                books: ["필즈수학 초급(상/하)", "예비초 3,4학년 필수"]
            },
            {
                title: "디딤돌 최상위수학",
                desc: "하이레벨 문제를 무난하게 풀어낼 수 있으면 황소 입학이 가능하다고 판단되는 기준 교재입니다.",
                books: ["최상위수학 3-1, 3-2", "심화 유형 마스터"]
            },
            {
                title: "성대 경시 기출 / 1031",
                desc: "황소 정기 입학시험과 가장 유사한 형태의 문제집으로 실전 감각을 극대화합니다.",
                books: ["성대 수학경시 기출(초2)", "1031 수학(초급 A/B/C/D)"]
            }
        ],
        strategies: [
            "시험 전 마지막 일주일: 성대경시 기출로 실전 모의고사 진행",
            "시험 전 2~3일: 틀린 문제 위주로 전체적인 오답 정리 (오답노트 활용)",
            "풀이과정 부분점수 없음 (무조건 답이 맞아야 함을 강조)"
        ]
    }
};

export default function Hwangso() {

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-[#0f172a] pt-24 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 -skew-x-12 transform origin-bottom-right"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold rounded-full mb-6 border border-amber-500/20">
                        <Trophy size={14} className="mr-2" />
                        상위 1%를 위한 심화 전문
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        황소수학 <span className="text-amber-500">입학부터 백업</span>까지<br />
                        완벽한 심화 로드맵
                    </h1>
                    <p className="text-gray-400 text-base max-w-3xl mx-auto font-medium leading-relaxed">
                        단순한 수업을 넘어 학생의 사고력을 확장합니다.<br />
                        '생각하는 황소'를 위한 영등포/신길 지역 최고의 전략적 파트너입니다.
                    </p>
                </div>
            </div>

            {/* Section 1: Admission Prep (입학/편입 대비) */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl mb-6">
                            {content.prep.icon}
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 mb-4">{content.prep.title}</h2>
                        <p className="text-gray-500 font-medium leading-relaxed">{content.prep.desc}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {content.prep.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 hover:border-amber-200 transition-colors">
                                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8">
                                    <Zap size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 mb-5">{item.title}</h4>
                                <p className="text-gray-500 font-medium leading-relaxed mb-8 text-sm">{item.desc}</p>
                                <div className="space-y-4">
                                    {item.points.map((pt, pIdx) => (
                                        <div key={pIdx} className="flex items-center space-x-3 text-sm font-bold text-gray-700">
                                            <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0" />
                                            <span>{pt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Textbooks & Strategy (교재 & 준비 과정) */}
            <section className="py-24 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                            {content.methods.icon}
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 mb-4">{content.methods.title}</h2>
                        <p className="text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed text-sm">{content.methods.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {content.methods.preparation.map((prep, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/20">
                                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 font-bold">
                                    STEP 0{idx + 1}
                                </div>
                                <h4 className="text-xl font-black text-gray-900 mb-4">{prep.title}</h4>
                                <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">{prep.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {prep.books.map((book, bIdx) => (
                                        <span key={bIdx} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-lg border border-amber-100 italic">
                                            {book}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#0f172a] p-12 rounded-[3.5rem] text-white">
                        <h4 className="text-xl font-black mb-8 flex items-center">
                            <Lightbulb className="mr-3 text-amber-500" />
                            독수리수학만의 합격 전략
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {content.methods.strategies.map((strat, idx) => (
                                <div key={idx} className="flex items-start space-x-3 text-gray-300 font-medium text-sm leading-relaxed">
                                    <div className="mt-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                                    <span>{strat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Bottom CTA */}
            <div className="bg-white py-24 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-gray-900 mb-6">최상위 수학을 향한 첫걸음,<br className="md:hidden" /> 지금 시작하세요.</h2>
                    <p className="text-gray-500 font-medium mb-12">
                        학생의 현재 심화 학습 수준을 객관적으로 진단하고,<br />황소 입학 및 교과 심화 로드맵을 설계해 드립니다.
                    </p>
                    <Link to="/contact/counseling" className="inline-flex items-center px-12 py-5 bg-[#1e3a8a] text-white font-black rounded-2xl hover:bg-black transition-all group shadow-xl shadow-blue-100">
                        심화 학습 상담 신청
                        <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
