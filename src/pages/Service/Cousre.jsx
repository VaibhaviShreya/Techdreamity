import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Clock, Users, Star, Award, Play, BookOpen } from 'lucide-react';
import {coursesData} from "./cousredata"
import { AiFillMail } from 'react-icons/ai';

const SubTopicDropdown = ({ title, topics, isOpen, onToggle }) => {
  return (
    <div className="ml-6 mt-3 border-l-2 border-gray-200 pl-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <span className="font-medium text-gray-700">{title}</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-2 space-y-2">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 ml-4 hover:bg-blue-50 rounded-lg transition-colors duration-200">
              <Play className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-600">{topic}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CourseSection = ({ section, isExpanded, onToggle, expandedSubTopics, onSubTopicToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <button
        onClick={() => onToggle(section.id)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-100 rounded-full">
            {section.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
            <p className="text-sm text-gray-600">{section.lessons} lessons • {section.duration}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="pt-4 space-y-4">
            {section.subTopics.map((subTopic, index) => (
              <SubTopicDropdown
                key={index}
                title={subTopic.title}
                topics={subTopic.topics}
                isOpen={expandedSubTopics[`${section.id}-${index}`]}
                onToggle={() => onSubTopicToggle(`${section.id}-${index}`)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NotFoundCourse = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/programs')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Programs
        </button>
      </div>
    </div>
  );
};

export default function CoursePage() {
  const { programName } = useParams();
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedSubTopics, setExpandedSubTopics] = useState({});
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and get course data
    setIsLoading(true);
    
    // Get course data based on programName
    const course = coursesData[programName] ;
    
    if (course) {
      setCourseData(course);
    } else {
      setCourseData(null);
    }
    
    setIsLoading(false);
  }, [programName]);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const toggleSubTopic = (subTopicId) => {
    setExpandedSubTopics(prev => ({
      ...prev,
      [subTopicId]: !prev[subTopicId]
    }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return <NotFoundCourse />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{courseData.subtitle}</p>
              <p className="text-blue-100 mb-6 leading-relaxed">{courseData.description}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{courseData.rating}</span>
                  <span className="text-blue-200">({courseData.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">{courseData.students.toLocaleString()} students</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-green-600">${courseData.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">${courseData.originalPrice}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4" />
                    <span>{courseData.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>{courseData.level}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4">
                Buy Course - ${courseData.price}
              </button>
              
              <div className="text-center text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Certificate of Completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
          <p className="text-gray-600">
            Click on each section to explore detailed topics and lessons. Each section contains multiple subtopics with hands-on exercises.
          </p>
        </div>

        <div className="space-y-4">
          {courseData.sections.map((section) => (
            <CourseSection
              key={section.id}
              section={section}
              isExpanded={expandedSection === section.id}
              onToggle={toggleSection}
              expandedSubTopics={expandedSubTopics}
              onSubTopicToggle={toggleSubTopic}
            />
          ))}
        </div>

        {/* Course Features */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-gray-700">100+ Video Lessons</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-gray-700">Hands-on Projects</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-gray-700">Certificate of Completion</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-gray-700">Community Support</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-gray-700">Lifetime Access</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-teal-600" />
              </div>
              <span className="text-gray-700">Job Placement Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
