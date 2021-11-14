export interface TestModel {
    id: number;
    title: string;
    description: string;
    questions: QuestionModel[],    
}

interface QuestionModel {    
        question: string;
        answer: string[];
}
