export default class Grader {
  gradeWellness(wellnessScore: number) {
    let color = ''
    if (wellnessScore <= 12)
      color = 'border-primary text-primary'

    else if (wellnessScore < 59)
      color = 'border-amber-500 text-amber-500'

    else color = 'border-red-500 text-red-500'

    return color
  }

  gradeHW(hw: number, gender: string) {
    let color = ''
    if (gender === 'male') {
      if (hw < 0.9)
        color = 'text-green-500'

      else if (hw < 1)
        color = 'text-amber-500'

      else color = 'text-red-500'
    }
    else {
      if (hw < 0.8)
        color = 'text-green-500'

      else if (hw < 0.85)
        color = 'text-amber-500'

      else color = 'text-red-500'
    }
    return color
  }

  gradeBMI(bmi: number) {
    let color = ''
    if (bmi < 18.5)
      color = 'text-red-500'

    else if (bmi < 25)
      color = 'text-green-500'

    else if (bmi < 30)

      color = 'text-amber-500'

    else
      color = 'text-red-500'

    return color
  }

  gradeGlucose(glu: number) {
    let color = ''
    if (glu < 5.5)
      color = 'text-green-500'
    else if (glu < 7)
      color = 'text-amber-500'
    else if (glu >= 11)
      color = 'text-red-500'
    return color
  }

  gradeChlo(chlo: number) {
    let color = ''
    if (chlo < 5.2)
      color = 'text-green-500'
    else if (chlo < 6.5)
      color = 'text-amber-500'
    else color = 'text-red-500'

    return color
  }

  gradeAge(age: number) {
    if (age < 35)
      return 1
    else if (age < 44)
      return 2
    else if (age < 54)
      return 3
    else return 4
  }

  gradeSystolic(sysbp: number) {
    let color = ''
    if (sysbp < 120)
      color = 'text-green-500'

    else if (sysbp < 139)
      color = 'text-amber-500'

    else if (sysbp < 159)
      color = 'text-red-500'

    else color = 'text-red-500'
    return color
  }

  gradeDiastolic(diabp: number) {
    let color = ''
    if (diabp < 80)
      color = 'text-green-500'

    else if (diabp < 89)
      color = 'text-amber-500'

    else if (diabp < 99)
      color = 'text-red-500'

    else color = 'text-red-500'

    return color
  }
}
