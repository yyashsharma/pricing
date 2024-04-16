import React from "react";
import { Button, Card } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* 1 */}
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl">SCIENTIFICALLY PLAN YOUR CAREER</h1>
        <p>FOR SCHOOL/COLLEGE STUDENTS & WORKING PROFESSIONALS</p>
      </div>
      {/* 2 */}
      <div className="flex gap-7 justify-center items-center ">
        <div className="mt-20">
          <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Basic
              </h2>
              <p className="text-gray-700 mb-4">
                Get started with the essentials
              </p>
              <p className="text-gray-600 font-bold text-lg mb-4">
                $19<span className="text-gray-500 text-sm">/month</span>
              </p>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Personalized career advice
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Resume review and optimization
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Job search strategies
                </li>
              </ul>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
                Select Plan
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="max-w-md bg-white  rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Basic
              </h2>
              <p className="text-gray-700 mb-4">
                Get started with the essentials
              </p>
              <p className="text-gray-600 font-bold text-lg mb-4">
                $19<span className="text-gray-500 text-sm">/month</span>
              </p>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Personalized career advice
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Resume review and optimization
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Job search strategies
                </li>
              </ul>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
                Select Plan
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="max-w-md bg-blue-500 text-cyan-50 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Basic
              </h2>
              <p className="text-gray-700 mb-4">
                Get started with the essentials
              </p>
              <p className="text-gray-600 font-bold text-lg mb-4">
                $19<span className="text-gray-500 text-sm">/month</span>
              </p>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Personalized career advice
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Resume review and optimization
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.535 10.832c-.157-.48-.732-.832-1.41-.832h-5v-4.618c0-.72-.583-1.309-1.305-1.309h-6.39c-.722 0-1.305.589-1.305 1.31v4.617h-5c-.677 0-1.253.353-1.41.832-.157.48-.012 1.019.348 1.377l9.987 9.98c.365.365.848.547 1.332.547s.967-.182 1.332-.547l9.987-9.98c.36-.358.505-.897.348-1.377zm-10.535 10.168l-8.535-8.537h5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-5l8.535-8.535 8.535 8.537-8.535 8.535z" />
                  </svg>
                  Job search strategies
                </li>
              </ul>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="container mx-auto mt-10">
        <div className="flex justify-center flex-col items-center bg-slate-100 m-5">
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              A CAREER COUNSELLOR CAN CHANGE YOUR LIFE
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              CareerGuide.com brings to you personalized career counselling
              session along with scientific and meticulously designed
              Psychometric Career Assessment to discover your true potential and
              interest.
            </p>
            <div className="flex justify-center flex-col items-center m-10">
              <Button>View Pricing</Button>
            </div>
          </Card>
        </div>
      </div>
      {/* 4 */}
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center gap-2">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl">Frequently Asked Question</h1>
            <p>What Users usually ask us.</p>
          </div>
          <div className="mt-10 flex flex-col gap-5 w-full mx-auto justify-center items-center">
            <Dropdown
              className="w-full"
              label="At what point in my academic or professional journey should I consider career counselling/career guidance?"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                The best time to start career counselling/career guidance is
                early in your academic journey, especially during your student
                years - both in school as well as college. Initiating career
                counselling/career guidance at this stage helps you explore
                things in an organized way, giving you a clear understanding of
                your career goals with respect to career selection, entrance
                exams, college admissions and higher education. However, we
                emphasize that career counselling/career guidance is beneficial
                at any stage of life especially in the life of working
                professionals where it can help in charting career growth plans.
                No matter if you're still in school or done with studies or an
                experienced working professional, it's always okay to ask for
                help from experts and make smart choices about your career.
                We're here to support you at every step of your journey.
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="w-full"
              label="At what point in my academic or professional journey should I consider career counselling/career guidance?"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                The best time to start career counselling/career guidance is
                early in your academic journey, especially during your student
                years - both in school as well as college. Initiating career
                counselling/career guidance at this stage helps you explore
                things in an organized way, giving you a clear understanding of
                your career goals with respect to career selection, entrance
                exams, college admissions and higher education. However, we
                emphasize that career counselling/career guidance is beneficial
                at any stage of life especially in the life of working
                professionals where it can help in charting career growth plans.
                No matter if you're still in school or done with studies or an
                experienced working professional, it's always okay to ask for
                help from experts and make smart choices about your career.
                We're here to support you at every step of your journey.
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="w-full"
              label="At what point in my academic or professional journey should I consider career counselling/career guidance?"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                The best time to start career counselling/career guidance is
                early in your academic journey, especially during your student
                years - both in school as well as college. Initiating career
                counselling/career guidance at this stage helps you explore
                things in an organized way, giving you a clear understanding of
                your career goals with respect to career selection, entrance
                exams, college admissions and higher education. However, we
                emphasize that career counselling/career guidance is beneficial
                at any stage of life especially in the life of working
                professionals where it can help in charting career growth plans.
                No matter if you're still in school or done with studies or an
                experienced working professional, it's always okay to ask for
                help from experts and make smart choices about your career.
                We're here to support you at every step of your journey.
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="w-full"
              label="At what point in my academic or professional journey should I consider career counselling/career guidance?"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                The best time to start career counselling/career guidance is
                early in your academic journey, especially during your student
                years - both in school as well as college. Initiating career
                counselling/career guidance at this stage helps you explore
                things in an organized way, giving you a clear understanding of
                your career goals with respect to career selection, entrance
                exams, college admissions and higher education. However, we
                emphasize that career counselling/career guidance is beneficial
                at any stage of life especially in the life of working
                professionals where it can help in charting career growth plans.
                No matter if you're still in school or done with studies or an
                experienced working professional, it's always okay to ask for
                help from experts and make smart choices about your career.
                We're here to support you at every step of your journey.
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="w-full"
              label="At what point in my academic or professional journey should I consider career counselling/career guidance?"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                The best time to start career counselling/career guidance is
                early in your academic journey, especially during your student
                years - both in school as well as college. Initiating career
                counselling/career guidance at this stage helps you explore
                things in an organized way, giving you a clear understanding of
                your career goals with respect to career selection, entrance
                exams, college admissions and higher education. However, we
                emphasize that career counselling/career guidance is beneficial
                at any stage of life especially in the life of working
                professionals where it can help in charting career growth plans.
                No matter if you're still in school or done with studies or an
                experienced working professional, it's always okay to ask for
                help from experts and make smart choices about your career.
                We're here to support you at every step of your journey.
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="w-full"
              label="At what point in my academic or professional journey should I consider career counselling/career guidance?"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                The best time to start career counselling/career guidance is
                early in your academic journey, especially during your student
                years - both in school as well as college. Initiating career
                counselling/career guidance at this stage helps you explore
                things in an organized way, giving you a clear understanding of
                your career goals with respect to career selection, entrance
                exams, college admissions and higher education. However, we
                emphasize that career counselling/career guidance is beneficial
                at any stage of life especially in the life of working
                professionals where it can help in charting career growth plans.
                No matter if you're still in school or done with studies or an
                experienced working professional, it's always okay to ask for
                help from experts and make smart choices about your career.
                We're here to support you at every step of your journey.
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="w-full"
              label="At what point in my academic or professional journey should I consider career counselling/career guidance?"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                The best time to start career counselling/career guidance is
                early in your academic journey, especially during your student
                years - both in school as well as college. Initiating career
                counselling/career guidance at this stage helps you explore
                things in an organized way, giving you a clear understanding of
                your career goals with respect to career selection, entrance
                exams, college admissions and higher education. However, we
                emphasize that career counselling/career guidance is beneficial
                at any stage of life especially in the life of working
                professionals where it can help in charting career growth plans.
                No matter if you're still in school or done with studies or an
                experienced working professional, it's always okay to ask for
                help from experts and make smart choices about your career.
                We're here to support you at every step of your journey.
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="w-full"
              label="At what point in my academic or professional journey should I consider career counselling/career guidance?"
              dismissOnClick={false}
            >
              <Dropdown.Item>
                The best time to start career counselling/career guidance is
                early in your academic journey, especially during your student
                years - both in school as well as college. Initiating career
                counselling/career guidance at this stage helps you explore
                things in an organized way, giving you a clear understanding of
                your career goals with respect to career selection, entrance
                exams, college admissions and higher education. However, we
                emphasize that career counselling/career guidance is beneficial
                at any stage of life especially in the life of working
                professionals where it can help in charting career growth plans.
                No matter if you're still in school or done with studies or an
                experienced working professional, it's always okay to ask for
                help from experts and make smart choices about your career.
                We're here to support you at every step of your journey.
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="mt-5">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel
            onSlideChange={(index) => console.log("onSlideChange()", index)}
          >
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 1
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 2
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
          </Carousel>
        </div>
      </div>
      {/* 6 */}
      <div className="bg-blue-400 p-10">
        <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-4xl">UNSURE WHICH CAREER PLAN IS BEST FOR YOU?</h1>
            <h2>CALL US ANY TIME!</h2>
            <p>+91-8800442358</p>
            <p>customercare@careerguide.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
