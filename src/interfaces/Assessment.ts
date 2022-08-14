export default interface Assessment {
  id: string
  memberId: string
  wellnessScore: number
  categoryId: number
  notes: Array<(string | number)>
  waist: number
  hips: number
  height: number
  weight: number
  systolic: number
  diastolic: number
  cholesterol: number
  bloodSugar: number
  weeklyCigarettes: number
  weeklyExercise: number
  weeklyAlcohol: number
  behaviourScore: string
  createdAt: string
}

