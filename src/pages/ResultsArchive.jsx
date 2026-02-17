import React from 'react';
import { Trophy, Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const results = [
    {
        id: 1,
        date: "2025-09-27",
        title: "대영고등학교 1학년 2학기 중간고사 수학 만점",
        student: "윤지이",
        type: "성적 우수"
    },
    {
        id: 4,
        date: "2025-12-21",
        title: "신길중3 황우진 학생 명덕외고 합격",
        student: "황우진",
        type: "합격 뉴스"
    },
    {
        id: 5,
        date: "2025-12-21",
        title: "신길중3 채정우 학생 대원외고 합격",
        student: "채정우",
        type: "합격 뉴스"
    },
    {
        id: 2,
        date: "2025-06-13",
        title: "황소수학 편입 합격",
        student: "대방초6 이준우, 대방초4 임채은",
        type: "합격 뉴스"
    },
    {
        id: 3,
        date: "2025-06-13",
        title: "중간고사 100점",
        student: "중대부초3 김가빈",
        type: "성적 우수"
    }
];

export default function ResultsArchive() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-slate-50 border-b border-slate-100 py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">성적 & 합격 소식</h1>
                    <p className="text-slate-500 font-medium">독수리수학 학생들의 성실함이 만들어낸<br className="md:hidden" /> 소중한 결실입니다</p>
                </div>
            </div>

            {/* Content Section (Minimal Blog List Style) */}
            <div className="max-w-5xl mx-auto py-12 px-4">
                <div className="border-t border-slate-200">
                    {/* List Header (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center px-6 py-4 bg-slate-50/50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <div className="w-24">날짜</div>
                        <div className="w-32">구분</div>
                        <div className="flex-1">내용</div>
                        <div className="w-40 text-right">학생</div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {[...results].sort((a, b) => new Date(b.date) - new Date(a.date)).map((result) => (
                            <Link
                                key={result.id}
                                to={`/about/results/${result.id}`}
                                className="group flex flex-col md:flex-row md:items-center px-6 py-6 md:py-5 hover:bg-slate-50 transition-colors cursor-pointer"
                            >
                                {/* Date & Type for Mobile */}
                                <div className="flex items-center space-x-3 mb-2 md:mb-0 md:w-24 text-sm text-slate-400 font-medium">
                                    <span className="md:hidden">[{result.date}]</span>
                                    <span className="hidden md:inline">{result.date}</span>
                                </div>

                                {/* Type Tag */}
                                <div className="md:w-32 mb-3 md:mb-0">
                                    <span className={`inline-block px-3 py-1 rounded text-[11px] font-bold ${result.type === '합격 뉴스' ? 'bg-blue-50 text-[#1e3a8a]' : 'bg-green-50 text-green-700'
                                        }`}>
                                        {result.type}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="flex-1 md:pr-8">
                                    <h2 className="text-base font-bold text-slate-800 group-hover:text-[#1e3a8a] transition-colors leading-snug">
                                        {result.title}
                                    </h2>
                                </div>

                                {/* Student */}
                                <div className="mt-3 md:mt-0 md:w-40 md:text-right flex items-center md:justify-end text-sm text-slate-500 font-medium">
                                    <span className="md:hidden mr-2">학생:</span>
                                    {result.student}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Empty State / Pagination Placeholder */}
                <div className="mt-12 pt-12 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-400">더 많은 소식을 준비 중입니다.</p>
                </div>
            </div>
        </div>
    );
}
